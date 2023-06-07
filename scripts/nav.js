const navToggle = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu');

navToggle.addEventListener('click', function() {
  navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});