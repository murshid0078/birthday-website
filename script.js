// Auto play music on first click
document.body.addEventListener("click", () => {
  document.getElementById("bg-music").play();
}, { once: true });

// Typing Animation
const text = `My love ❤️,
On this special day, I just want you to know
how thankful I am to have you in my life.
You are my happiness, my peace, my everything.
Happy Birthday 🎉🎂
I love you forever 💕`;

let index = 0;
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// Slideshow
let photos = ["photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg", "photos/6.jpg", "photos/7.jpg", "photos/8.jpg", "photos/9.jpg", "photos/10.jpg", "photos/12.jpg", "photos/13.jpg", "photos/14.jpg"];
let i = 0;
setInterval(() => {
  i = (i + 1) % photos.length;
  document.getElementById("slide").src = photos[i];
}, 3000);

// Surprise Button
function showSurprise() {
  document.getElementById("surprise-text").innerHTML =
    "💖 Will you always be with me? 💖";
}
function showSurprise() {
  document.getElementById("surprise-text").innerHTML =
    "💖 Will you always be with me? 💖";

  for (let i = 0; i < 50; i++) {
    let confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "24px";
    confetti.style.animation = "fall 3s linear";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
setInterval(() => {
  document.getElementById("slide").style.opacity = 0;
  setTimeout(() => {
    i = (i + 1) % photos.length;
    document.getElementById("slide").src = photos[i];
    document.getElementById("slide").style.opacity = 1;
  }, 1000);
}, 3000);
function toggleMusic() {
  let music = document.getElementById("bg-music");
  music.paused ? music.play() : music.pause();
}
function checkPassword() {
  const correctPassword = "ghost"; // CHANGE THIS
  const entered = document.getElementById("password").value;

  if (entered === correctPassword) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    document.getElementById("bg-music").play();
    typeEffect();
  } else {
    document.getElementById("error").innerText = "❌ Wrong password, try again ❤️";
  }
}