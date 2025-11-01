// ⚡ auto-publish.js
// 自动发布 horoscope 文章 + index.html
// 每天执行一次（由 GitHub Actions 调用）
// 作者: chia 专用增强版 ✅ 支持 index.html 同步更新

import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// === 🧭 基本配置 ===
const scheduledDir = "articles/scheduled/horoscope"; // 预排文章目录
const targetDir = "articles/horoscope";              // 发布目录
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

console.log(`🚀 开始检查待发布文件：${today}`);

if (!fs.existsSync(scheduledDir)) {
  console.error(`❌ 找不到目录：${scheduledDir}`);
  process.exit(1);
}
if (!fs.existsSync(targetDir)) {
  console.error(`❌ 找不到目录：${targetDir}`);
  process.exit(1);
}

// === 🧩 查找今日文件 ===
const scheduledFiles = fs.readdirSync(scheduledDir);
const todayFiles = scheduledFiles.filter(f => f.includes(today) && f.endsWith(".html"));

if (todayFiles.length === 0) {
  console.log("📭 今天没有可发布的文章或 index。");
  process.exit(0);
}

// === ⚙️ 搬移与改名 ===
todayFiles.forEach(file => {
  const oldPath = path.join(scheduledDir, file);

  let newFileName = file
    .replace(/^new-/, "")          // 去掉 new-
    .replace(`-${today}`, "");     // 去掉日期部分

  // ✅ 特别处理 index 文件
  if (newFileName.startsWith("index")) {
    newFileName = "index.html";
  }

  const newPath = path.join(targetDir, newFileName);
  fs.renameSync(oldPath, newPath);
  console.log(`✅ 已发布：${newFileName}`);
});

// === 🧱 自动 Git 上传 ===
try {
  execSync(`git config user.name "github-actions[bot]"`);
  execSync(`git config user.email "github-actions[bot]@users.noreply.github.com"`);
  execSync(`git add ${targetDir}`);
  execSync(`git commit -m "🤖 Auto publish horoscope article & index for ${today}"`);
  execSync(`git push`);
  console.log("🎉 已自动提交至 GitHub Pages。");
} catch (err) {
  console.error("⚠️ 没有新的更改或提交出错：", err.message);
}


