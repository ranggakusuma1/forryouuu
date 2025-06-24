document.addEventListener("DOMContentLoaded", () => {
  const bgMusic = document.getElementById("bgMusic");

// Usaha memulai audio jika autoplay gagal
bgMusic.play().catch(() => {
  // Autoplay ditolak, akan diputar saat klik pertama kali
  document.body.addEventListener("click", () => {
    bgMusic.play();
  }, { once: true });
});

  const startScreen = document.getElementById("start-screen");
  const nameInput = document.getElementById("nameInput");
  const startButton = document.getElementById("startButton");
  const flower = document.querySelector("#animation-flower");
  const greeting = document.getElementById("greeting");
  const credit = document.querySelector(".my-name");
  const credit2 = document.querySelector(".my-name-2")

 startButton.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    alert("Silakan isi nama terlebih dahulu!");
    return;
  }

  startScreen.style.display = "none";
  greeting.textContent = `Nih ada bunga khusus buat ${name}!`;
  greeting.style.display = "block";
  credit.style.display = "block";
  credit2.style.display = "block";
  
const bgMusic = document.getElementById("bgMusic");
bgMusic.play().catch((e) => {
  console.warn("Pemutaran otomatis diblokir. Musik akan diputar setelah interaksi lebih lanjut.");
});


  setTimeout(() => {
    greeting.classList.add("fade-out");
    credit.classList.add("fade-out");
    credit2.classList.add("fade-out");
  }, 20000);

  // Tampilkan bunga setelah greeting menghilang
  setTimeout(() => {
    greeting.style.display = "none";
    credit.style.display = "none";
    credit2.style.display = "none";
    flower.style.display = "block";
    flower.classList.add("fade-in"); // tambahkan animasi masuk
  }, 4000); // waktu romantis: 4 detik
});

});

function createRaindrop() {
  const body = document.querySelector("body");
  const xPosition = Math.random() * window.innerWidth;
  const delay = Math.random() * 5;
  const duration = Math.random() * 2 + 2;

  const rainDrop = document.createElement("div");
  rainDrop.className = "rain";
  rainDrop.style.left = `${xPosition}px`;
  rainDrop.style.animationDelay = `${delay}s`;
  rainDrop.style.animationDuration = `${duration}s`;
  rainDrop.style.display = "none";
  body.appendChild(rainDrop);

  setTimeout(() => {
    rainDrop.style.display = "inherit";
  }, 800);
}

setInterval(createRaindrop, 100);
