// ⚡ auto-publish-inspiration.js
// 自动发布 inspiration 文章 + index.html + 更新 sitemap.xml + Git 提交

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// === 🧭 基本配置 ===
const scheduledDir = "articles/scheduled/inspiration";
const targetDir = "articles/inspiration";
const sitemapPath = "sitemap.xml";
const siteBase = "https://www.bookofanswersonline.com";

// ✅ 获取本地时区的今天日期（避免 UTC 偏差）
const today = new Date().toLocaleDateString("en-CA"); // e.g. "2025-10-30"

console.log(`🌿 开始发布 Inspiration 文件：${today}`);

// === 📁 检查目录 ===
if (!fs.existsSync(scheduledDir) || !fs.existsSync(targetDir)) {
  console.error("❌ 找不到对应目录。");
  process.exit(1);
}

// === 🔍 查找今日文件 ===
const files = fs
  .readdirSync(scheduledDir)
  .filter(f => f.includes(today) && f.endsWith(".html"));

if (files.length === 0) {
  console.log(`📭 今天（${today}）没有要发布的 inspiration 文件。`);
  process.exit(0);
}

let newUrls = [];

// === ⚙️ 搬移与改名 ===
files.forEach(file => {
  const oldPath = path.join(scheduledDir, file);

  // 去掉 new- 前缀与日期部分
  let newName = file
    .replace(/^new-/, "")
    .replace(`-${today}`, "");

  // 特殊规则：index.html
  if (newName.includes("index")) newName = "index.html";

  const newPath = path.join(targetDir, newName);
  try {
    fs.renameSync(oldPath, newPath);
    console.log(`✅ 已发布：${newName}`);
    newUrls.push(`${siteBase}/articles/inspiration/${newName}`);
  } catch (err) {
    console.error(`❌ 搬移文件失败：${file}`, err.message);
  }
});

// === 🗺️ 更新 sitemap.xml ===
try {
  console.log("🗺️ 正在更新 sitemap.xml...");

  let sitemap = fs.existsSync(sitemapPath)
    ? fs.readFileSync(sitemapPath, "utf-8")
    : '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>';

  // 去除重复 <url>
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
    } else {
      console.log(`ℹ️ 已存在于 sitemap: ${url}`);
    }
  });

  fs.writeFileSync(sitemapPath, sitemap, "utf-8");
  console.log("✅ sitemap.xml 已更新！");
} catch (err) {
  console.error("⚠️ 更新 sitemap.xml 失败：", err.message);
}

// === 🚀 Git 自动提交 ===
try {
  console.log("📤 正在推送到 Git...");
  execSync(`git config user.name "github-actions[bot]"`);
  execSync(`git config user.email "github-actions[bot]@users.noreply.github.com"`);
  execSync(`git add ${targetDir} ${sitemapPath}`);
  execSync(`git commit -m "🌿 Auto publish inspiration article & update sitemap for ${today}" || echo "No changes"`);
  execSync(`git push`);
  console.log("🎉 Inspiration 已成功发布并更新 sitemap！");
} catch (err) {
  console.error("⚠️ 没有更改或提交错误：", err.message);
}

console.log("✨ 自动发布流程完成。");
