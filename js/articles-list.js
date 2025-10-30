// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/moon-phases/what-is-a-waxing-crescent-moon.html">What is a Waxing Crescent Moon?</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/the-sky-is-not-the-limit-your-mind-is.html">The Sky is Not the Limit, Your Mind Is.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/how-mercury-retrograde-affects-your-zodiac-sign.html">How Mercury Retrograde Affects Your Zodiac Sign</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/can-the-moons-phases-really-affect-your-sleep.html">Can the Moon's Phases Really Affect Your Sleep?</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/what-does-your-heart-already-know.html">What Does Your Heart Already Know?</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/what-if-today-is-setting-you-up-for-a-miracle.html">What If Today is Setting You Up for a Miracle?</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});