// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
    <h3>More Articles</h3>
  <div class="article-grid">
    <a href="https://www.bookofanswersonline.com/articles/the-power-of-stillness.html">The Power of Stillness</a>
    <a href="https://www.bookofanswersonline.com/articles/the-magic-of-moon-phases.html">The Magic of Moon Phases</a>
    <a href="https://www.bookofanswersonline.com/articles/the-hidden-strengths-of-each-zodiac-sign.html">The Hidden Strengths of Each Zodiac Sign</a>
    <a href="https://www.bookofanswersonline.com/articles/mindfulness-in-everyday-life.html">Mindfulness in Everyday Life</a>
    <a href="https://www.bookofanswersonline.com/articles/the-art-of-listening-to-your-intuition.html">The Art of Listening to Your Intuition</a>
    <a href="#">Coming Articles</a>
    </ul>
    <div class="more-link">
      <a href="/articles-en.html">→ More Articles</a>
    </div>
  `;
});