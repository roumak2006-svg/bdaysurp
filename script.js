// ✏️ CHANGE ONLY THIS
const girlfriendName = "Awwdrijaa";

const messages = [
  "You are my favorite person 💖",
  "Every moment with you is magic ✨",
  "I love you more than words ❤️"
];

// Insert name
document.getElementById("name").innerText = girlfriendName;

// Page navigation
let page = 0;
const pages = document.querySelectorAll(".page");

function nextPage() {
  pages[page].classList.remove("active");
  page++;
  pages[page].classList.add("active");
}

// Typewriter effect
let msgIndex = 0, charIndex = 0;
function typeEffect() {
  if (charIndex < messages[msgIndex].length) {
    const char = messages[msgIndex][charIndex];
document.getElementById("typeText").innerHTML += char === " " ? "&nbsp;" : char;
charIndex++;

    setTimeout(typeEffect, 80);
  } else {
    msgIndex = (msgIndex + 1) % messages.length;
    charIndex = 0;
    setTimeout(() => {
      document.getElementById("typeText").innerText = "";
      typeEffect();
    }, 1500);
  }
}
typeEffect();

// Slideshow
let img = 1;
setInterval(() => {
  img++;
  if (img > 5) img = 1;
  document.getElementById("slideshow").src = `photos/${img}.jpg`;
}, 2500);
// ===== PHOTOBOOK LOGIC =====
let photoIndex = 1;
const totalPhotos = 5; // change if you have more

function nextPhoto() {
  const img = document.getElementById("photoBookImage");

  if (photoIndex >= totalPhotos) {
    nextPage(); // auto go to videos
    return;
  }

  img.classList.add("flip-out");

  setTimeout(() => {
    photoIndex++;
    img.src = `photos/${photoIndex}.jpg`;

    img.classList.remove("flip-out");
    img.style.animation = "none";
    void img.offsetWidth;
    img.style.animation = "";
  }, 600);
}


// Hearts animation
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

// Candle
function blowCandle() {
  document.getElementById("candle").innerText = "✨";
  setTimeout(nextPage, 1000);
}

// Music toggle
const music = document.getElementById("bgMusic");
document.getElementById("musicBtn").onclick = () => {
  music.paused ? music.play() : music.pause();
};

// Secret unlock
function unlock() {
  nextPage();
}
