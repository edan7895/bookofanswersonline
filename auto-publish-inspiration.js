// ⚡ auto-publish-inspiration.js
// 自动发布 inspiration 文章 + index.html

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const scheduledDir = "articles/scheduled/inspiration";
const targetDir = "articles/inspiration";
const today = new Date().toISOString().split("T")[0];

console.log(`🌿 开始发布 inspiration 文件：${today}`);

if (!fs.existsSync(scheduledDir) || !fs.existsSync(targetDir)) {
  console.error("❌ 找不到对应目录。");
  process.exit(1);
}

const files = fs.readdirSync(scheduledDir).filter(f => f.includes(today) && f.endsWith(".html"));
if (files.length === 0) {
  console.log("📭 今天没有要发布的 inspiration 文件。");
  process.exit(0);
}

files.forEach(file => {
  const oldPath = path.join(scheduledDir, file);
  let newName = file.replace(/^new-/, "").replace(`-${today}`, "");
  if (newName.startsWith("index")) newName = "index.html";
  fs.renameSync(oldPath, path.join(targetDir, newName));
  console.log(`✅ 已发布：${newName}`);
});

try {
  execSync(`git config user.name "github-actions[bot]"`);
  execSync(`git config user.email "github-actions[bot]@users.noreply.github.com"`);
  execSync(`git add ${targetDir}`);
  execSync(`git commit -m "🌿 Auto publish inspiration article & index for ${today}"`);
  execSync(`git push`);
  console.log("🎉 inspiration 已成功发布！");
} catch (err) {
  console.error("⚠️ 没有更改或提交错误：", err.message);
}
