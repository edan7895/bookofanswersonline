// ⚡ auto-publish-spiritualguidance.js
// 自动发布 spiritual-guidance 文章 + index.html + 自动更新 sitemap.xml

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// === 🧭 基本配置 ===
const scheduledDir = "articles/scheduled/spiritual-guidance"; // 预排目录
const targetDir = "articles/spiritual-guidance";              // 发布目录
const sitemapPath = "sitemap.xml";
const siteBase = "https://www.bookofanswersonline.com";
const today = new Date().toISOString().split("T")[0];         // YYYY-MM-DD

console.log(`✨ 开始发布 spiritual-guidance 文件：${today}`);

if (!fs.existsSync(scheduledDir) || !fs.existsSync(targetDir)) {
  console.error("❌ 找不到对应目录。");
  process.exit(1);
}

// === 📂 查找今日文件（容错匹配）===
const files = fs
  .readdirSync(scheduledDir)
  .filter(f => f.match(new RegExp(`${today}.*\\.html$`, "i")));

if (files.length === 0) {
  console.log(`📭 今天（${today}）没有找到要发布的文件。`);
  const allFiles = fs.readdirSync(scheduledDir);
  console.log("📁 当前 scheduled 目录内的文件：", allFiles.join(", "));
  process.exit(0);
}

let newUrls = [];

// === ⚙️ 搬移与改名 ===
files.forEach(file => {
  const oldPath = path.join(scheduledDir, file);

  let newName = file
    .replace(/^newfile-/, "")
    .replace(/^new-/, "")
    .replace(/^draft-/, "")
    .replace(`-${today}`, "")
    .replace(/-?\d{4}-\d{2}-\d{2}/, ""); // 防止重复日期片段

  if (newName.includes("index")) newName = "index.html";

  const newPath = path.join(targetDir, newName);
  fs.renameSync(oldPath, newPath);
  console.log(`✅ 已发布：${newName}`);

  // 📍加入 sitemap 链接
  newUrls.push(`${siteBase}/articles/spiritual-guidance/${newName}`);
});

// === 🗺️ 更新 sitemap.xml ===
try {
  let sitemap = fs.existsSync(sitemapPath)
    ? fs.readFileSync(sitemapPath, "utf-8")
    : '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>';

  newUrls.forEach(url => {
    if (!sitemap.includes(url)) {
      const newEntry = `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
      sitemap = sitemap.replace("</urlset>", `${newEntry}\n</urlset>`);
      console.log(`🗺️ 已加入 sitemap: ${url}`);
    }
  });

  fs.writeFileSync(sitemapPath, sitemap, "utf-8");
  console.log("✅ sitemap.xml 已更新！");
} catch (err) {
  console.error("⚠️ 更新 sitemap.xml 失败：", err.message);
}

// === 🚀 自动 Git 提交 ===
try {
  execSync(`git config user.name "github-actions[bot]"`);
  execSync(`git config user.email "github-actions[bot]@users.noreply.github.com"`);
  execSync(`git add ${targetDir} ${sitemapPath}`);
  execSync(`git commit -m "✨ Auto publish spiritual-guidance article & update sitemap for ${today}"`);
  execSync(`git push`);
  console.log("🎉 spiritual-guidance 已成功发布并更新 sitemap！");
} catch (err) {
  console.error("⚠️ 没有更改或提交错误：", err.message);
}
