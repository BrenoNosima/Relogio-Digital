function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  document.getElementById("hour").textContent = hours;
  document.getElementById("minute").textContent = minutes;
  document.getElementById("second").textContent = seconds;
}

setInterval(updateClock, 1000);
updateClock();