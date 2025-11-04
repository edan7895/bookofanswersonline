// ⚡ auto-publish-horoscope.js
// 自动发布 horoscope 文章 + index.html

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// === 🧭 基本配置 ===
const scheduledDir = "articles/scheduled/horoscope"; // 预排目录
const targetDir = "articles/horoscope";              // 发布目录
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

console.log(`🔮 开始发布 horoscope 文件：${today}`);

if (!fs.existsSync(scheduledDir) || !fs.existsSync(targetDir)) {
  console.error("❌ 找不到对应目录。");
  process.exit(1);
}

// === 📂 查找今日文件 ===
const files = fs
  .readdirSync(scheduledDir)
  .filter(f => f.includes(today) && f.endsWith(".html"));

if (files.length === 0) {
  console.log("📭 今天没有要发布的 horoscope 文件。");
  process.exit(0);
}

// === ⚙️ 搬移与改名 ===
files.forEach(file => {
  const oldPath = path.join(scheduledDir, file);

  // 去掉 new- 前缀与日期部分
  let newName = file
    .replace(/^new-/, "")            // 去掉 new-
    .replace(`-${today}`, "");       // 去掉日期部分

  // 如果包含 "index" 字样（例如 new-index-2025-11-04.html），则命名为 index.html
  if (newName.includes("index")) newName = "index.html";

  const newPath = path.join(targetDir, newName);
  fs.renameSync(oldPath, newPath);
  console.log(`✅ 已发布：${newName}`);
});

// === 🚀 自动 Git 提交 ===
try {
  execSync(`git config user.name "github-actions[bot]"`);
  execSync(`git config user.email "github-actions[bot]@users.noreply.github.com"`);
  execSync(`git add ${targetDir}`);
  execSync(`git commit -m "🔮 Auto publish horoscope article & index for ${today}"`);
  execSync(`git push`);
  console.log("🎉 horoscope 已成功发布！");
} catch (err) {
  console.error("⚠️ 没有更改或提交错误：", err.message);
}
