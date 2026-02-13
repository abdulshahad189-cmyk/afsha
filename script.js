// Typing animation for Afsha's name
function typeWriter(element, text, speed = 100) {
  let index = 0;
  element.innerText = "";

  function type() {
    if (index < text.length) {
      element.innerText += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Start experience: hide overlay, play music and run animations
function startExperience() {
  const overlay = document.getElementById('startOverlay');
  const bgMusic = document.getElementById('bgMusic');
  const h1 = document.querySelector('h1');

  if (overlay) overlay.classList.add('hidden');

  if (bgMusic) {
    bgMusic.play().catch(() => {
      /* ignore play promise rejection */
    });
  }

  if (h1) {
    const text = h1.dataset && h1.dataset.text ? h1.dataset.text : h1.innerText;
    typeWriter(h1, text, 80);
  }
}

// Wire start button (if present)
const startBtn = document.getElementById('startBtn');
if (startBtn) startBtn.addEventListener('click', startExperience);

// Show hidden message
function showLove() {
  const el = document.getElementById("hiddenMessage");
  if (el) el.classList.remove("hidden");
}

// Make No button run away
function escapeNo(btn) {
  if (!btn) return;
  const x = 5 + Math.random() * 80; // keep inside viewport
  const y = 10 + Math.random() * 70;
  btn.style.position = "absolute";
  btn.style.left = x + "vw";
  btn.style.top = y + "vh";
}

// Handle Yes / No
function unlockSecret(answer) {
  if (answer) {
    const main = document.getElementById("mainContainer");
    const secret = document.getElementById("secretScreen");
    const msg = document.getElementById("secretMessage");
    if (main) main.classList.add("hidden");
    if (secret) secret.classList.remove("hidden");
    if (msg) msg.innerText = "Correct choice 😌❤️ You're smart AND cute. I love you, Afsha.";
  } else {
    // No path preserved for playful effect
  }
}

// Show gallery
function showGallery() {
  const secret = document.getElementById("secretScreen");
  const gallery = document.getElementById("galleryScreen");
  if (secret) secret.classList.add("hidden");
  if (gallery) gallery.classList.remove("hidden");
}

// Show forever screen
function showForever() {
  const gallery = document.getElementById("galleryScreen");
  const forever = document.getElementById("foreverScreen");
  if (gallery) gallery.classList.add("hidden");
  if (forever) forever.classList.remove("hidden");
}

// Random funny compliments
const compliments = [
  "You are illegally cute 😤❤️",
  "How are you this pretty and still mine?",
  "If loving you was a job, I'd work overtime.",
  "You're the reason my standards are ruined.",
  "I'd still choose you even if you stole all my fries.",
  "You're my favorite person 💕",
  "This is not hyperbole: you're perfect.",
  "My heart is your property now 🔐❤️"
];

function randomCompliment() {
  const random = Math.floor(Math.random() * compliments.length);
  const el = document.getElementById("complimentText");
  if (el) el.innerText = compliments[random];
}

// Floating hearts generator
const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
  if (!heartsContainer) return;
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 5 + Math.random() * 5 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

if (heartsContainer) setInterval(createHeart, 500);
