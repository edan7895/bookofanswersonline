// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/inspiration/your-perspective-is-your-superpower.html">Your Perspective Is Your Superpower</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/your-daily-horoscope-today.html">Your Daily Horoscope: What the Stars Have in Store for You Today</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/today-choose-joy-on-purpose.html">Today: Choose Joy on Purpose</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/how-does-the-moon-affect-the-oceans-tides.html">How Does the Moon Affect the Ocean's Tides?</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/what-question-is-your-soul-asking-today.html">What Question Is Your Soul Asking Today?</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/how-zodiac-signs-influence-personality.html">How Zodiac Signs Influence Personality</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});