// 🎵 AUTO PLAY MUSIC ON FIRST CLICK (ENHANCED)
let musicInitialized = false;
document.body.addEventListener("click", () => {
  if (!musicInitialized) {
    const music = document.getElementById("bg-music");
    music.play().catch(() => {}); // Silent catch for autoplay policy
    musicInitialized = true;
  }
}, { once: true });

// 🎉 NEW: Toggle Cake Modal Function
let cakeModalOpen = false;
window.toggleCake = function() {
  const cakeModal = document.getElementById('cakeModal');
  const cakeSection = document.getElementById('cakeSection');
  
  if (cakeModalOpen) {
    cakeModal.style.display = 'none';
    cakeModalOpen = false;
  } else {
    cakeModal.style.display = 'flex';
    cakeModalOpen = true;
    // Auto-scroll to cake modal
    setTimeout(() => {
      cakeModal.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  }
};

// 🎉 NEW: Initialize heart particles on page load
function createHearts() {
  const heartsContainer = document.getElementById('hearts');
  setInterval(() => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    heartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 400);
}

// 🎉 NEW: Password strength indicator
function updatePasswordStrength() {
  const password = document.getElementById('password').value;
  const strengthBar = document.getElementById('strengthBar');
  const length = password.length;
  
  strengthBar.className = 'strength-bar';
  if (length > 8) {
    strengthBar.classList.add('strength-strong');
    strengthBar.style.width = '100%';
  } else if (length > 4) {
    strengthBar.classList.add('strength-medium');
    strengthBar.style.width = '60%';
  } else {
    strengthBar.classList.add('strength-weak');
    strengthBar.style.width = Math.min(length * 12, 40) + '%';
  }
}

// 🎉 NEW: Music notes celebration
function createMusicNotes() {
  const musicNotes = document.getElementById('musicNotes');
  const notes = ['♪', '♫', '♬', '♪', '♫', '🎵', '🎶'];
  
  musicNotes.style.opacity = '1';
  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      const note = document.createElement('div');
      note.className = 'note';
      note.innerHTML = notes[Math.floor(Math.random() * notes.length)];
      note.style.left = Math.random() * 100 + '%';
      note.style.animationDuration = (Math.random() * 3 + 5) + 's';
      musicNotes.appendChild(note);
      
      setTimeout(() => note.remove(), 8000);
    }, i * 150);
  }
  setTimeout(() => {
    musicNotes.style.opacity = '0';
    setTimeout(() => musicNotes.innerHTML = '', 1000);
  }, 6000);
}

// Typing Animation (ENHANCED with cursor)
const text = `My love ❤️,
On this special day, I just want you to know
how thankful I am to have you in my life.
You are my happiness, my peace, my everything.
Happy Birthday 🎉🎂
I love you forever 💕`;

let index = 0;
function typeEffect() {
  const typeHere = document.getElementById("typeHere");
  const cursor = document.getElementById("cursor");
  
  if (index < text.length) {
    typeHere.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  } else {
    // Hide cursor when typing complete
    cursor.style.display = 'none';
  }
}

// Slideshow with smooth fade transition (UNCHANGED)
let photos = ["photos/1.jpg", "photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg", "photos/6.jpg", "photos/7.jpg", "photos/8.jpg", "photos/9.jpg", "photos/10.jpg", "photos/12.jpg", "photos/13.jpg", "photos/14.jpg"];
let i = 0;
setInterval(() => {
  document.getElementById("slide").style.opacity = 0;
  setTimeout(() => {
    i = (i + 1) % photos.length;
    document.getElementById("slide").src = photos[i];
    document.getElementById("slide").style.opacity = 1;
  }, 1000);
}, 3000);

// 🔥 Fireworks explosion function
function createFireworks(x, y) {
  const fireworks = document.createElement('div');
  fireworks.className = 'fireworks';
  document.body.appendChild(fireworks);
  
  const colors = ['#ff6b9d', '#ffd93d', '#ff8e8e', '#a8e6cf', '#b8e6b0', '#ff1493', '#ffd700'];
  
  for (let i = 0; i < 35; i++) {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = x + 'px';
    firework.style.top = y + 'px';
    firework.style.background = colors[Math.floor(Math.random() * colors.length)];
    firework.style.borderRadius = '50%';
    
    const angle = (i / 35) * Math.PI * 2;
    const distance = 120 + Math.random() * 120;
    const vx = Math.cos(angle) * distance;
    const vy = Math.sin(angle) * distance;
    
    firework.animate([
      { transform: `translate(0, 0) scale(0)`, opacity: 1 },
      { transform: `translate(${vx}px, ${vy}px) scale(1)`, opacity: 0.8 },
      { transform: `translate(${vx*1.2}px, ${vy*1.2}px) scale(0.5)`, opacity: 0 }
    ], {
      duration: 1500 + Math.random() * 500,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    });
    
    fireworks.appendChild(firework);
  }
  
  setTimeout(() => fireworks.remove(), 2500);
}

// 🎠 ENHANCED Love meter function (STARTS AT 0%, FILLS ON CLICK)
function fillLoveMeter(event) {
  const loveFill = document.getElementById('loveFill');
  const lovePercentage = document.getElementById('lovePercentage');
  const btn = event ? event.target : document.querySelector('.love-btn');
  
  // Reset to 0% first
  loveFill.style.width = '0%';
  lovePercentage.textContent = '0%';
  btn.innerHTML = 'Filling... 💖';
  btn.style.transform = 'scale(0.95)';
  
  // Smooth animation to 100%
  setTimeout(() => {
    loveFill.style.width = '100%';
    let progress = 0;
    const interval = setInterval(() => {
      progress += 4;
      lovePercentage.textContent = progress + '%';
      if (progress >= 100) {
        clearInterval(interval);
        lovePercentage.textContent = '100% 💖';
        btn.innerHTML = 'Full Love! ❤️';
        btn.style.transform = 'scale(1.05)';
        
        // 🎉 Bonus: Mini fireworks on completion
        setTimeout(() => createFireworks(window.innerWidth / 2, 200), 300);
      }
    }, 35);
  }, 300);
}

// 🎤 MICROPHONE CAKE BLOWING - NEW FEATURES (for cake modal)
let audioContext = null;
let analyser = null;
let microphone = null;
let isListening = false;
let blowThreshold = 120;
let candlesLit = 7;

async function startMicBlowing() {
  try {
    const btn = document.getElementById('micBtn');
    btn.disabled = true;
    btn.innerHTML = '🎤 Listening... 💨';
    
    const stream = await navigator.mediaDevices.getUserMedia({ 
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false
      } 
    });
    
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioContext.createAnalyser();
    microphone = audioContext.createMediaStreamSource(stream);
    
    microphone.connect(analyser);
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    
    isListening = true;
    initCake();
    
    function detectBlow() {
      if (!isListening) return;
      
      analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
      
      const micFill = document.querySelector('#micLevel .mic-fill') || createMicFill();
      micFill.style.width = Math.min((average / 255) * 100, 100) + '%';
      
      if (average > blowThreshold && candlesLit > 0) {
        blowRandomCandles();
      }
      
      requestAnimationFrame(detectBlow);
    }
    
    detectBlow();
    
  } catch (error) {
    alert('🎤 Microphone access denied! Use mouse hover as backup 💖');
    document.getElementById('micBtn').disabled = false;
    document.getElementById('micBtn').innerHTML = '🎤 Enable Microphone Magic';
  }
}

function createMicFill() {
  const micLevel = document.getElementById('micLevel');
  let fill = micLevel.querySelector('.mic-fill');
  if (!fill) {
    fill = document.createElement('div');
    fill.className = 'mic-fill';
    micLevel.appendChild(fill);
  }
  return fill;
}

function blowRandomCandles() {
  const litCandles = document.querySelectorAll('#cakeModal .candle.lit');
  if (litCandles.length === 0) return;
  
  const blowCount = Math.floor(Math.random() * 3) + 1;
  for (let i = 0; i < Math.min(blowCount, litCandles.length); i++) {
    const randomCandle = litCandles[Math.floor(Math.random() * litCandles.length)];
    blowCandle({ currentTarget: randomCandle });
  }
  
  document.getElementById('cakeStatus').innerHTML = 
    `<span id="candlesLeft">${candlesLit}</span> candles left | WOW! Strong blow! 💨💨💨`;
}

function blowCandle(e) {
  const candle = e.currentTarget;
  if (candle.classList.contains('lit')) {
    candle.classList.remove('lit');
    candle.classList.add('blow-out');
    candlesLit--;
    updateCakeStatus();
    createBlowEffect(candle.getBoundingClientRect());
    
    if (candlesLit === 0) {
      celebrateCake();
    }
  }
}

function initCake() {
  candlesLit = document.querySelectorAll('#cakeModal .candle.lit').length;
  updateCakeStatus();
  
  document.querySelectorAll('#cakeModal .candle').forEach(candle => {
    candle.addEventListener('mouseenter', blowCandle);
  });
}

function updateCakeStatus() {
  document.getElementById('candlesLeft').textContent = candlesLit;
  document.getElementById('relightBtn').style.display = candlesLit === 0 ? 'inline-block' : 'none';
  
  if (candlesLit > 0) {
    document.getElementById('cakeStatus').innerHTML = 
      `<span id="candlesLeft">${candlesLit}</span> candles left ✨ | Blow into mic! 🎤💨`;
  }
}

function relightCandles() {
  document.querySelectorAll('#cakeModal .candle').forEach(candle => {
    candle.classList.remove('blow-out');
    candle.classList.add('lit');
  });
  candlesLit = 7;
  updateCakeStatus();
  
  createFireworks(window.innerWidth / 2, 300);
}

function createBlowEffect(rect) {
  for (let i = 0; i < 5; i++) {
    const puff = document.createElement('div');
    puff.innerHTML = '💨';
    puff.style.cssText = `
      position: fixed; left: ${rect.left + Math.random() * rect.width}px;
      top: ${rect.top - 10}px; font-size: 16px; pointer-events: none;
      z-index: 10001; animation: blowPuff 0.8s ease-out forwards;
    `;
    document.body.appendChild(puff);
    setTimeout(() => puff.remove(), 800);
  }
}

function celebrateCake() {
  document.getElementById('cakeStatus').innerHTML = '🎉 AMAZING! All blown out! Make a wish! ✨✨✨';
  createFireworks(window.innerWidth / 2, 400);
  setTimeout(createMusicNotes, 500);
}

// 🔥 ENHANCED Password check with EPIC effects
function checkPassword() {
  const correctPassword = "ghost";
  const entered = document.getElementById("password").value;

  if (entered === correctPassword) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    
    // 🎉 EPIC FIREWORKS EXPLOSION
    setTimeout(() => {
      createFireworks(window.innerWidth / 2, window.innerHeight / 2);
    }, 800);
    
    // 🎉 LOVE METER REVEAL (starts at 0%)
    setTimeout(() => {
      const loveMeter = document.getElementById('loveMeter');
      if (loveMeter) {
        loveMeter.style.display = 'block';
        document.getElementById('loveFill').style.width = '0%';
        document.getElementById('lovePercentage').textContent = '0%';
      }
    }, 1200);
    
    // Original typing effect
    setTimeout(typeEffect, 500);
    
    // Music notes celebration
    createMusicNotes();
    
  } else {
    document.getElementById("error").innerText = "❌ Wrong password, try again ❤️";
    document.getElementById("error").style.animation = 'shake 0.5s ease-in-out';
    setTimeout(() => {
      document.getElementById("error").style.animation = '';
    }, 500);
  }
}

// 🎉 ENHANCED: Surprise Button with confetti + extra effects
function showSurprise() {
  document.getElementById("surprise-text").innerHTML = "💖 𝒲𝒾𝓁𝓁 𝓎𝑜𝓊 𝒶𝓁𝓌𝒶𝓎𝓈 𝒷𝑒 𝓌𝒾𝓉𝒽 𝓂𝑒?💖";

  // Original confetti
  for (let j = 0; j < 50; j++) {
    let confetti = document.createElement("div");
    confetti.innerHTML = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "24px";
    confetti.style.animation = "fall 3s linear";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
  
  // 🎉 Extra heart confetti
  for (let k = 0; k < 30; k++) {
    setTimeout(() => {
      let heartConfetti = document.createElement("div");
      heartConfetti.innerHTML = "💖";
      heartConfetti.style.position = "fixed";
      heartConfetti.style.left = Math.random() * 100 + "vw";
      heartConfetti.style.top = "-20px";
      heartConfetti.style.fontSize = "20px";
      heartConfetti.style.animation = "fall 4s linear";
      heartConfetti.style.pointerEvents = "none";
      heartConfetti.style.zIndex = "9999";
      document.body.appendChild(heartConfetti);
      
      setTimeout(() => heartConfetti.remove(), 4000);
    }, k * 50);
  }
  
  // 🎉 Trigger music notes again
  setTimeout(createMusicNotes, 1000);
}

// 🎵 ENHANCED Music toggle for new music button
window.toggleMusic = function() {
  const music = document.getElementById("bg-music");
  const icon = document.getElementById("music-icon");
  const status = document.getElementById("music-status");
  const btn = document.getElementById("musicToggle");
  
  if (music.paused) {
    music.play();
    icon.className = "fas fa-pause-circle";
    status.textContent = "Playing Birthday Song 🎵";
    btn.classList.add("playing");
  } else {
    music.pause();
    icon.className = "fas fa-play-circle";
    status.textContent = "Play Birthday Song 🎵";
    btn.classList.remove("playing");
  }
};

// 🎉 Fullscreen functionality
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fullscreen-btn').addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
});

// 🎉 Initialize everything on page load
window.addEventListener('load', () => {
  createHearts();
  
  // Password strength listener
  document.getElementById('password').addEventListener('input', updatePasswordStrength);
  
  // Animate love stats counters
  animateCounters();
  
  // Create thumbnails for photos
  createThumbnails();
});

// 🎉 Animate love stats counters
function animateCounters() {
  const counters = {
    love: document.getElementById('love-count'),
    kiss: document.getElementById('kiss-count'),
    star: document.getElementById('star-count')
  };
  
  // Animate love count
  let loveCount = 0;
  const loveInterval = setInterval(() => {
    if (loveCount <= 365) {
      counters.love.textContent = loveCount;
      loveCount += 5;
    } else {
      counters.love.textContent = '365+';
      clearInterval(loveInterval);
    }
  }, 20);
  
  // Animate star count
  let starCount = 0;
  const starInterval = setInterval(() => {
    if (starCount <= 1000) {
      counters.star.textContent = starCount.toLocaleString();
      starCount += 25;
    } else {
      counters.star.textContent = '1000+';
      clearInterval(starInterval);
    }
  }, 15);
}

// 🎉 NEW: Create photo thumbnails
function createThumbnails() {
  const thumbnails = document.getElementById('thumbnails');
  photos.forEach((photo, index) => {
    const thumb = document.createElement('img');
    thumb.src = photo;
    thumb.onclick = () => {
      document.getElementById('slide').src = photo;
    };
    thumbnails.appendChild(thumb);
  });
}

// Add CSS animations for cake (fall + blowPuff)
const style = document.createElement('style');
style.textContent = `
  @keyframes fall {
    to {
      transform: translateY(100vh) rotate(360deg);
      opacity: 0;
    }
  }
  @keyframes blowPuff {
    to { 
      transform: translateY(-50px) scale(0); 
      opacity: 0; 
    }
  }
`;
document.head.appendChild(style);
