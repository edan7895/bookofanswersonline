// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/horoscope/zodiac-signs-and-their-perfect-career-matches.html">Zodiac Signs and Their Perfect Career Matches</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/dark-side-of-the-zodiac-each-sign-biggest-pet-peeve.html">The Dark Side of the Zodiac: Each Sign's Biggest Pet Peeve</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/moon-phases-explained-ultimate-guide.html">Moon Phases Explained: Your Ultimate Guide</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/peace-is-not-a-place-but-a-state-of-mind.html">Peace is Not a Place, But a State of Mind. Find It Here.</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/courage-is-fear-that-said-its-prayers.html">Courage Is Fear That Said Its Prayers.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/which-zodiac-signs-are-ultimate-power-couples.html">Which Two Zodiac Signs Are Ultimate Power Couples?</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});