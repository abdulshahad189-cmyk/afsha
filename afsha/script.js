// Warning popup on load
window.onload = () => {
  alert("⚠️ Warning: You are about to be loved aggressively ❤️");
};

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

// Run typing animation when page fully loads
document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  if (h1) {
    const originalText = h1.innerText;
    typeWriter(h1, originalText, 80);
  }
});

// Show hidden message
function showLove() {
  document.getElementById("hiddenMessage").classList.remove("hidden");
}

// Make No button run away
function escapeNo(btn) {
  const x = Math.random() * 80;
  const y = Math.random() * 80;
  btn.style.position = "absolute";
  btn.style.left = x + "vw";
  btn.style.top = y + "vh";
}

// Handle Yes / No
function unlockSecret(answer) {
  if (answer) {
    document.getElementById("mainContainer").classList.add("hidden");
    document.getElementById("secretScreen").classList.remove("hidden");
    document.getElementById("secretMessage").innerText =
      "Correct choice 😌❤️ You're smart AND cute. I love you, Afsha.";
  } else {
    alert("Nice try 😌 You don't get a No option ❤️");
  }
}

// Show gallery
function showGallery() {
  document.getElementById("secretScreen").classList.add("hidden");
  document.getElementById("galleryScreen").classList.remove("hidden");
}

// Show forever screen
function showForever() {
  document.getElementById("galleryScreen").classList.add("hidden");
  document.getElementById("foreverScreen").classList.remove("hidden");
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
  document.getElementById("complimentText").innerText = compliments[random];
}

// Floating hearts generator
const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
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

setInterval(createHeart, 500);
