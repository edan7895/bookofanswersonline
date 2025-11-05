// ⚡ auto-publish-horoscope.js
// 自动发布 horoscope 文章 + index.html + 更新 sitemap + Git 提交

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// === 🧭 基本配置 ===
const scheduledDir = "articles/scheduled/horoscope"; // 预排目录
const targetDir = "articles/horoscope";              // 发布目录
const today = new Date().toLocaleDateString("en-CA"); // 本地时区 YYYY-MM-DD

console.log(`🔮 开始自动发布 Horoscope 文件：${today}`);

// === 📁 检查目录 ===
if (!fs.existsSync(scheduledDir) || !fs.existsSync(targetDir)) {
  console.error("❌ 找不到对应目录，请确认路径是否正确。");
  process.exit(1);
}

// === 🔍 查找今日文件 ===
const files = fs
  .readdirSync(scheduledDir)
  .filter(f => f.includes(today) && f.endsWith(".html"));

if (files.length === 0) {
  console.log(`📭 今天（${today}）没有要发布的 horoscope 文件。`);
  process.exit(0);
}

// === ⚙️ 搬移与改名 ===
files.forEach(file => {
  const oldPath = path.join(scheduledDir, file);

  // 去掉 new- 前缀与日期部分
  let newName = file
    .replace(/^new-/, "")            // 去掉 new-
    .replace(`-${today}`, "");       // 去掉日期部分

  // 特殊处理 index 文件
  if (newName.includes("index")) newName = "index.html";

  const newPath = path.join(targetDir, newName);

  try {
    fs.renameSync(oldPath, newPath);
    console.log(`✅ 已发布：${newName}`);
  } catch (err) {
    console.error(`❌ 发布失败：${file}`, err.message);
  }
});

// === 🗺️ 更新 sitemap ===
try {
  console.log("🗺️ 正在更新 sitemap.xml...");
  execSync(`node scripts/update-sitemap-category.js horoscope`, { stdio: "inherit" });
  console.log("✅ sitemap 已更新。");
} catch (err) {
  console.error("⚠️ 更新 sitemap 失败：", err.message);
}

// === 🚀 Git 自动提交 ===
try {
  console.log("📤 正在提交到 Git...");
  execSync(`git config user.name "github-actions[bot]"`);
  execSync(`git config user.email "github-actions[bot]@users.noreply.github.com"`);
  execSync(`git add ${targetDir} sitemap.xml`);
  execSync(`git commit -m "🔮 Auto publish horoscope article & update sitemap for ${today}" || echo "No changes"`);
  execSync(`git push`);
  console.log("🎉 Horoscope 已成功发布并推送到远端！");
} catch (err) {
  console.error("⚠️ Git 提交或推送错误：", err.message);
}

console.log("✨ 自动发布流程完成。");
