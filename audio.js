// ====== AUDIO PAGE SCRIPT ======

// Loader fade out dengan equalizer animasi
function initLoader() {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.style.transition = "opacity 1.5s ease";
    loader.style.opacity = "0";
    setTimeout(() => loader.style.display = "none", 1500);
  }, 2500); // lebih panjang biar terasa dramatis
}

// Playlist eksklusif: hanya satu track jalan
function initPlaylist() {
  const audios = document.querySelectorAll("audio");
  audios.forEach(audio => {
    audio.addEventListener("play", () => {
      audios.forEach(other => {
        if (other !== audio) other.pause();
      });
      setGlobalTrack(audio);
    });
  });
}

// Simpan track global agar tetap jalan meski pindah halaman
let globalTrack = null;
function setGlobalTrack(audio) {
  globalTrack = audio;
}

// Equalizer sinkron (simulasi beat)
function initEqualizer() {
  const bars = document.querySelectorAll(".equalizer span");
  if (!bars.length) return;

  setInterval(() => {
    bars.forEach(bar => {
      const height = Math.floor(Math.random() * 60) + 20;
      bar.style.height = height + "px";
    });
  }, 200);
}

// Clock update
function initClock() {
  function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString('id-ID', { hour12: false, timeZone: 'Asia/Jakarta' });
    const clock = document.getElementById('clock');
    const clockMobile = document.getElementById('clock-mobile');
    if (clock) clock.innerText = time;
    if (clockMobile) clockMobile.innerText = time;
  }
  setInterval(updateClock, 1000);
  updateClock();
}

// Sidebar toggle
function initSidebar() {
  const hamburger = document.getElementById('hamburger-btn');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-sidebar');

  if (hamburger && sidebar && closeBtn) {
    hamburger.addEventListener('click', () => {
      sidebar.classList.toggle('active');
    });
    closeBtn.addEventListener('click', () => {
      sidebar.classList.remove('active');
    });
    document.addEventListener('click', (e) => {
      if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });
  }
}

// ====== INIT ======
window.addEventListener('load', () => {
  initLoader();
  initPlaylist();
  initEqualizer();
  initClock();
  initSidebar();
});