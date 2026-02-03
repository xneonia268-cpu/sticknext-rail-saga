// Dark Mode Toggle dengan localStorage
const darkModeBtn = document.getElementById("darkModeBtn");

// Cek preferensi sebelumnya
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Jam Digital + Tanggal
function updateClock() {
  const now = new Date();
  const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const dayName = days[now.getDay()];
  const date = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("clock").textContent =
    `${dayName}, ${date}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();