// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://www.bookofanswersonline.com/articles/love-compatibility-according-to-the-zodiac.html">Love Compatibility According to the Zodiac</a>
    <a href="https://www.bookofanswersonline.com/articles/living-by-the-light-of-the-moon.html">Living by the Light of the Moon</a>
    <a href="https://www.bookofanswersonline.com/articles/the-power-of-daily-inspiration.html">The Power of Daily Inspiration</a>
    <a href="https://www.bookofanswersonline.com/articles/the-power-of-stillness.html">The Power of Stillness</a>
    <a href="https://www.bookofanswersonline.com/articles/the-magic-of-moon-phases.html">The Magic of Moon Phases</a>
    <a href="https://www.bookofanswersonline.com/articles/the-hidden-strengths-of-each-zodiac-sign.html">The Hidden Strengths of Each Zodiac Sign</a>
  </div>
  <a href="https://www.bookofanswersonline.com/articles-en.html" class="cta-button">Read More Articles</a>
</div>
  `;
});