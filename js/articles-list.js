// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/horoscope/what-your-venus-sign-reveals-about-your-love-language.html">What Your Venus Sign Reveals About Your Love Language</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/why-can-we-see-the-moon-during-the-day.html">Why Can We Sometimes See the Moon During the Day?</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/the-universe-is-whispering.html">The Universe is Whispering. Are You Ready to Listen?</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/your-ultimate-guide-to-the-12-zodiac-signs.html">Your Ultimate Guide to the 12 Zodiac Signs: Traits, Strengths & Weaknesses</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/trade-expectation-for-appreciation.html">Trade Expectation for Appreciation.</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/listen-to-the-whisper-within.html">Listen to the Whisper Within</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});