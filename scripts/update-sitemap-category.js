// ⚡ scripts/update-sitemap-category.js
// 按类别更新 sitemap.xml 中的对应部分

const fs = require("fs");
const path = require("path");

const BASE_URL = "https://bookofanswersonline.com";
const SITEMAP_PATH = "sitemap.xml";
const CATEGORY_MAP = {
  "spiritual-guidance": "articles/spiritual-guidance",
  "inspiration": "articles/inspiration",
  "horoscope": "articles/horoscope",
  "moon-phases": "articles/moon-phases"
};

const category = process.argv[2]; // 例如 node scripts/update-sitemap-category.js inspiration
if (!category || !CATEGORY_MAP[category]) {
  console.error("❌ 请提供要更新的类别参数，如：node scripts/update-sitemap-category.js inspiration");
  process.exit(1);
}

const today = new Date().toISOString().split("T")[0];
const dir = CATEGORY_MAP[category];

if (!fs.existsSync(dir)) {
  console.error(`❌ 找不到目录：${dir}`);
  process.exit(1);
}

// === 生成该类别的 URL 列表 ===
function generateCategoryUrls() {
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".html"));
  return [
    `  <url>\n    <loc>${BASE_URL}/${dir}/index.html</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.9</priority>\n  </url>`,
    ...files
      .filter(f => f !== "index.html")
      .map(f =>
        `  <url>\n    <loc>${BASE_URL}/${dir}/${f}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>0.9</priority>\n  </url>`
      )
  ].join("\n");
}

// === 读取 sitemap.xml ===
let sitemap = fs.readFileSync(SITEMAP_PATH, "utf8");

// === 替换该类别块 ===
const regex = new RegExp(
  `(<!-- ${category} -->[\\s\\S]*?)(?=<!--|<\\/urlset>)`,
  "i"
);

if (!regex.test(sitemap)) {
  console.error(`⚠️ sitemap.xml 中未找到 <!-- ${category} --> 块。`);
  process.exit(1);
}

const newCategoryBlock = `<!-- ${category} -->\n${generateCategoryUrls()}\n\n`;
sitemap = sitemap.replace(regex, newCategoryBlock);

// === 保存 sitemap ===
fs.writeFileSync(SITEMAP_PATH, sitemap);
console.log(`✅ 已更新 sitemap.xml 的 "${category}" 区块。`);
