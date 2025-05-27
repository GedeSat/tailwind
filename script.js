

/// Hamburger Toggle
const navbarToggle = document.getElementById('navbar-toggle');
const navbarMenu = document.getElementById('navbar-menu');

const toggleBtn = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');

toggleBtn.addEventListener('click', function () {
  menu.classList.toggle('hidden');
  toggleBtn.classList.toggle('hamburger-active');
});

// Dropdown Videography Toggle
const btnVideo = document.getElementById('btn-video');
const dropdownVideo = document.getElementById('dropdown-video');

btnVideo.addEventListener('click', () => {
  dropdownVideo.classList.toggle('hidden');
  dropdownPhoto.classList.add('hidden'); // tutup dropdown lain kalau ada
});

// Dropdown Fotography Toggle
const btnPhoto = document.getElementById('btn-photo');
const dropdownPhoto = document.getElementById('dropdown-photo');

btnPhoto.addEventListener('click', () => {
  dropdownPhoto.classList.toggle('hidden');
  dropdownVideo.classList.add('hidden'); // tutup dropdown lain kalau ada
});

// Klik di luar dropdown, dropdown-nya ketutup
window.addEventListener('click', (e) => {
  if (!btnVideo.contains(e.target) && !dropdownVideo.contains(e.target)) {
    dropdownVideo.classList.add('hidden');
  }
  if (!btnPhoto.contains(e.target) && !dropdownPhoto.contains(e.target)) {
    dropdownPhoto.classList.add('hidden');
  }
});
