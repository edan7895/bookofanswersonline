// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/inspiration/small-steps-still-move-mountains.html">Small Steps Still Move Mountains.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/which-zodiac-signs-are-the-most-ambitious.html">Which Zodiac Signs Are the Most Ambitious?</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/quarter-moon-phases-annual-goals.html">How to Use the Quarter Moon Phases to Set and Achieve Your Annual Goals</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/you-are-exactly-where-you-need-to-be.html">You Are Exactly Where You Need to Be.</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/your-future-self-is-thanking-you.html">Your Future Self is Thanking You for Today’s Effort.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/zodiac-signs-as-friends-your-ultimate-squad-mate.html">Zodiac Signs as Friends: Who's Your Ultimate Squad Mate?</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});