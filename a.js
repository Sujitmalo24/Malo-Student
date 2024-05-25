document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const navMenu = document.getElementById('nav-menu');
    
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        toggleBtn.classList.toggle('active');
    });
});
// script.js
document.getElementById('nav-toggle').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
  if (navLinks.style.display === 'block') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'block';
  }
});