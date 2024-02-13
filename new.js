const navbarToggle = document.getElementById('toggle-button');
const navbarLinks = document.getElementById('navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
