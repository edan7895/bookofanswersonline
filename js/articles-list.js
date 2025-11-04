// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/beyond-thought-beyond-fear-find-your-truth.html">Beyond Thought, Beyond Fear: Find Your Truth.</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/how-to-track-the-lunar-cycle.html">How to Track the Lunar Cycle: A Beginner’s Guide</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/your-vibe-attracts-your-tribe.html">Your Vibe Attracts Your Tribe.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/what-your-venus-sign-reveals-about-your-love-language.html">What Your Venus Sign Reveals About Your Love Language</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/why-can-we-see-the-moon-during-the-day.html">Why Can We Sometimes See the Moon During the Day?</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/the-universe-is-whispering.html">The Universe is Whispering. Are You Ready to Listen?</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});