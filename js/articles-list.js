// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="#">Updating</a>
    <a href="https://www.bookofanswersonline.com/articles/the-power-of-stillness.html">The Power of Stillness</a>
    <a href="https://www.bookofanswersonline.com/articles/the-magic-of-moon-phases.html">The Magic of Moon Phases</a>
    <a href="https://www.bookofanswersonline.com/articles/the-hidden-strengths-of-each-zodiac-sign.html">The Hidden Strengths of Each Zodiac Sign</a>
    <a href="https://www.bookofanswersonline.com/articles/mindfulness-in-everyday-life.html">Mindfulness in Everyday Life</a>
    <a href="https://www.bookofanswersonline.com/articles/the-art-of-listening-to-your-intuition.html">The Art of Listening to Your Intuition</a>
  </div>
  <a href="https://www.bookofanswersonline.com/articles-en.html" class="cta-button">Read More Articles</a>
</div>
  `;
});