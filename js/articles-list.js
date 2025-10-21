// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://www.bookofanswersonline.com/articles/moon-phases/how-does-the-moon-affect-the-oceans-tides.html">How Does the Moon Affect the Ocean's Tides?</a>
    <a href="https://www.bookofanswersonline.com/articles/spiritual-guidance/what-question-is-your-soul-asking-today.html">What Question Is Your Soul Asking Today?</a>
    <a href="https://www.bookofanswersonline.com/articles/horoscope/how-zodiac-signs-influence-personality.html">How Zodiac Signs Influence Personality</a>
    <a href="https://www.bookofanswersonline.com/articles/inspiration/your-perspective-is-your-superpower.html">Your Perspective Is Your Superpower</a>
    <a href="https://www.bookofanswersonline.com/articles/spiritual-guidance/the-book-of-answers-listening-to-the-wisdom-within.html">The Book of Answers: Listening to the Wisdom Within</a>
    <a href="https://www.bookofanswersonline.com/articles/moon-phases/what-are-the-8-major-phases-of-the-moon.html">What Are the 8 Major Phases of the Moon?</a>
  </div>
  <a href="https://www.bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});