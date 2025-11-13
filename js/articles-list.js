// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/horoscope/most-loyal-zodiac-signs-in-friendship.html">Ranked: The Most Loyal Zodiac Signs in Friendship</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/how-to-use-moon-phases-for-planning-goal-setting.html">How to Use the Moon’s Phases for Planning and Goal Setting</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/in-this-moment-all-is-well.html">In This Moment, All Is Well.</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/small-steps-still-move-mountains.html">Small Steps Still Move Mountains.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/which-zodiac-signs-are-the-most-ambitious.html">Which Zodiac Signs Are the Most Ambitious?</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/quarter-moon-phases-annual-goals.html">How to Use the Quarter Moon Phases to Set and Achieve Your Annual Goals</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;

});
