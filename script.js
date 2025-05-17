// Müzik Kontrolleri
const music = document.getElementById("bg-music");
const musicList = [
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
];
let currentMusicIndex = 0;

function playMusic() {
    music.play();
}

function pauseMusic() {
    music.pause();
}

function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
    music.src = musicList[currentMusicIndex];
    music.play();
}

// Fotoğraf Değiştirme
const images = [
    "https://via.placeholder.com/200x200?text=Seni+Seviyorum",
    "https://via.placeholder.com/200x200?text=Mutlu+Yıllar",
    "https://via.placeholder.com/200x200?text=Nice+Yıllara",
    "https://via.placeholder.com/200x200?text=İyi+Ki+Doğdun"
];
let currentImageIndex = 0;

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("current-image").src = images[currentImageIndex];
}

// Chat ve Kalp Animasyonu
const heartPopup = document.getElementById("heart-popup");
const specialMessages = [
    "seni seviyorum",
    "iyi ki doğdun",
    "mutlu yıllar",
    "nice yıllara",
    "aşkım",
    "sevgilim"
];

function checkMessage() {
    const input = document.getElementById("chat-input").value.toLowerCase();
    if (specialMessages.some(msg => input.includes(msg))) {
        heartPopup.textContent = "❤️ " + document.getElementById("chat-input").value + " ❤️";
        heartPopup.classList.add("active");
    }
    document.getElementById("chat-input").value = "";
}

function closeHeart() {
    heartPopup.classList.remove("active");
}

// Uçan Kalp Baloncukları
const loveMessages = [
    "İyi ki doğdun!",
    "Mutlu yıllar!",
    "Nice yıllara!",
    "Seni seviyorum!",
    "Aşkım ❤️",
    "Sevgilim 💖"
];

function createHeartBubble() {
    const bubble = document.createElement("div");
    bubble.className = "heart-bubble";
    bubble.setAttribute("data-message", loveMessages[Math.floor(Math.random() * loveMessages.length)]);
    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(bubble);

    setTimeout(() => {
        bubble.remove();
    }, 6000);
}

setInterval(createHeartBubble, 800);