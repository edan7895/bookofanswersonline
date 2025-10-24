// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/horoscope/unlocking-your-sun-moon-and-rising-signs.html">Unlocking Your Sun, Moon, and Rising Signs: A Beginner’s Guide</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/its-not-a-bad-day-just-a-challenging-chapter.html">It’s Not a Bad Day, Just a Challenging Chapter</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/what-is-the-difference-between-a-new-moon-and-a-full-moon.html">What is the Difference Between a New Moon and a Full Moon?</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/your-perspective-is-your-superpower.html">Your Perspective Is Your Superpower</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/your-daily-horoscope-today.html">Your Daily Horoscope: What the Stars Have in Store for You Today</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/today-choose-joy-on-purpose.html">Today: Choose Joy on Purpose</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});