// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/you-are-exactly-where-you-need-to-be.html">You Are Exactly Where You Need to Be.</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/your-future-self-is-thanking-you.html">Your Future Self is Thanking You for Today’s Effort.</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/zodiac-signs-as-friends-your-ultimate-squad-mate.html">Zodiac Signs as Friends: Who's Your Ultimate Squad Mate?</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/why-does-the-moon-look-bigger.html">Why Does the Moon Look Bigger Sometimes? The Illusion Explained</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/breathe-in-courage-breathe-out-doubt.html">Breathe In Courage, Breathe Out Doubt.</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/dont-wait-for-the-perfect-moment.html">Don’t Wait for the Perfect Moment. Take the Moment and Make It Perfect.</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});