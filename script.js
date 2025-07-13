function toggleLetters() {
  const box = document.getElementById('letters-box');
  box.classList.toggle('hidden');
}

// Floating Hearts with Love Quotes
const heartsContainer = document.querySelector('.hearts');
const loveQuotes = [
  "I love you endlessly 💕",
  "You're my everything 💫",
  "Forever and always ❤️",
  "You complete me 🥰",
  "You’re the best part of my life 💖"
];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.textContent = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = 5 + Math.random() * 5 + 's';
  heart.style.fontSize = 20 + Math.random() * 20 + 'px';
  heartsContainer.appendChild(heart);
  setTimeout(() => heartsContainer.removeChild(heart), 10000);
}
setInterval(createHeart, 800);
