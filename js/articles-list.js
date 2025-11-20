// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/moon-phases/how-to-tell-if-the-moon-is-waxing-or-waning.html">How to Tell if the Moon is Waxing or Waning: A Simple Trick</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/you-are-held-and-supported-by-the-universe.html">You Are Held and Supported by the Universe.</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/be-1-percent-better-every-day.html">Be 1% Better Today Than You Were Yesterday.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/zodiac-signs-as-coffee-orders.html">The Zodiac Signs as Coffee Orders: What’s Your Cosmic Brew?</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/why-we-see-the-same-side-of-the-moon.html">Why We See the Same Side of the Moon: The Science of Synchronous Rotation</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/trust-the-journey-even-when-you-cannot-see-the-path.html">Trust the Journey, Even When You Cannot See the Path.</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});