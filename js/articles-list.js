// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://www.bookofanswersonline.com/articles/what-are-the-8-major-phases-of-the-moon.html">What Are the 8 Major Phases of the Moon?</a>
    <a href="https://www.bookofanswersonline.com/articles/why-people-still-believe-in-astrology.html">Why People Still Believe in Astrology</a>
    <a href="https://www.bookofanswersonline.com/articles/daily-inspiration-finding-light-in-everyday-moments.html">Daily Inspiration: Finding Light in Everyday Moments</a>
    <a href="https://www.bookofanswersonline.com/articles/love-compatibility-according-to-the-zodiac.html">Love Compatibility According to the Zodiac</a>
    <a href="https://www.bookofanswersonline.com/articles/living-by-the-light-of-the-moon.html">Living by the Light of the Moon</a>
    <a href="https://www.bookofanswersonline.com/articles/the-power-of-daily-inspiration.html">The Power of Daily Inspiration</a>
  </div>
  <a href="https://www.bookofanswersonline.com/articles-en.html" class="cta-button">Read More Articles</a>
</div>
  `;
});