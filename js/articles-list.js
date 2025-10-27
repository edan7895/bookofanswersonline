// js/articles-list.js

document.addEventListener("DOMContentLoaded", function() {
  const container = document.getElementById("more-articles");

  if (!container) return;

  container.innerHTML = `
<div class="cta-section">
  <h2>Latest Articles:</h2>
  <div class="article-grid">
    <a href="https://bookofanswersonline.com/articles/moon-phases/how-long-does-a-full-moon-last.html">How Long Does a Full Moon Last?</a>
    <a href="https://bookofanswersonline.com/articles/spiritual-guidance/quiet-your-mind-the-answer-will-follow.html">Quiet Your Mind, the Answer Will Follow</a>
    <a href="https://bookofanswersonline.com/articles/horoscope/unlocking-your-sun-moon-and-rising-signs.html">Unlocking Your Sun, Moon, and Rising Signs: A Beginner’s Guide</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/its-not-a-bad-day-just-a-challenging-chapter.html">It’s Not a Bad Day, Just a Challenging Chapter</a>
    <a href="https://bookofanswersonline.com/articles/moon-phases/what-is-the-difference-between-a-new-moon-and-a-full-moon.html">What is the Difference Between a New Moon and a Full Moon?</a>
    <a href="https://bookofanswersonline.com/articles/inspiration/your-perspective-is-your-superpower.html">Your Perspective Is Your Superpower</a>
  </div>
  <a href="https://bookofanswersonline.com/articles/index.html" class="cta-button">Read More Articles</a>
</div>
  `;
});