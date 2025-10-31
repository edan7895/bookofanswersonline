// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/horoscope/your-ultimate-guide-to-the-12-zodiac-signs.html">Your Ultimate Guide to the 12 Zodiac Signs: Traits, Strengths & Weaknesses</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/trade-expectation-for-appreciation.html">Trade Expectation for Appreciation.</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/listen-to-the-whisper-within.html">Listen to the Whisper Within</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/what-is-a-waxing-crescent-moon.html">What is a Waxing Crescent Moon?</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/the-sky-is-not-the-limit-your-mind-is.html">The Sky is Not the Limit, Your Mind Is.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/how-mercury-retrograde-affects-your-zodiac-sign.html">How Mercury Retrograde Affects Your Zodiac Sign</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});