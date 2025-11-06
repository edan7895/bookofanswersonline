// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/inspiration/dont-wait-for-the-perfect-moment.html">Don’t Wait for the Perfect Moment. Take the Moment and Make It Perfect.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/the-most-compatible-zodiac-signs-for-lasting-love.html">The Most Compatible Zodiac Signs for Lasting Love</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/beyond-thought-beyond-fear-find-your-truth.html">Beyond Thought, Beyond Fear: Find Your Truth.</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/how-to-track-the-lunar-cycle.html">How to Track the Lunar Cycle: A Beginner’s Guide</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/your-vibe-attracts-your-tribe.html">Your Vibe Attracts Your Tribe.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/what-your-venus-sign-reveals-about-your-love-language.html">What Your Venus Sign Reveals About Your Love Language</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});