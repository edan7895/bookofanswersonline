// ⚡ auto-publish-inspiration.js
// 自动发布 inspiration 文章 + index.html + 更新 sitemap.xml

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const scheduledDir = "articles/scheduled/inspiration";
const targetDir = "articles/inspiration";
const today = new Date().toISOString().split("T")[0];
const sitemapPath = "sitemap.xml";
const siteBase = "https://www.bookofanswersonline.com";

console.log(`🌿 开始发布 inspiration 文件：${today}`);

if (!fs.existsSync(scheduledDir) || !fs.existsSync(targetDir)) {
  console.error("❌ 找不到对应目录。");
  process.exit(1);
}

const files = fs
  .readdirSync(scheduledDir)
  .filter(f => f.includes(today) && f.endsWith(".html"));

if (files.length === 0) {
  console.log("📭 今天没有要发布的 inspiration 文件。");
  process.exit(0);
}

let newUrls = [];

files.forEach(file => {
  const oldPath = path.join(scheduledDir, file);

  // 去掉 new- 前缀与日期部分
  let newName = file
    .replace(/^new-/, "")
    .replace(`-${today}`, "");

  // 特别规则：index.html
  if (newName.includes("index")) newName = "index.html";

  const newPath = path.join(targetDir, newName);
  fs.renameSync(oldPath, newPath);
  console.log(`✅ 已发布：${newName}`);

  // 加入 sitemap 链接
  newUrls.push(`${siteBase}/articles/inspiration/${newName}`);
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
  execSync(`git commit -m "🌿 Auto publish inspiration article & update sitemap for ${today}"`);
  execSync(`git push`);
  console.log("🎉 inspiration 已成功发布并更新 sitemap！");
} catch (err) {
  console.error("⚠️ 没有更改或提交错误：", err.message);
}
