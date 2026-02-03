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