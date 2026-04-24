const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");

const hProgress = document.getElementById("hours");
const mProgress = document.getElementById("minutes");
const sProgress = document.getElementById("seconds");

const radius = 60;
const circumference = 2 * Math.PI * radius;

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Display
  hh.innerText = String(hours).padStart(2, '0');
  mm.innerText = String(minutes).padStart(2, '0');
  ss.innerText = String(seconds).padStart(2, '0');

  // Convert to percentage
  let hPercent = (hours % 12) / 12;
  let mPercent = minutes / 60;
  let sPercent = seconds / 60;

  // Update stroke offset
  hProgress.style.strokeDashoffset = circumference - (circumference * hPercent);
  mProgress.style.strokeDashoffset = circumference - (circumference * mPercent);
  sProgress.style.strokeDashoffset = circumference - (circumference * sPercent);
}

setInterval(updateClock, 1000);
updateClock();
