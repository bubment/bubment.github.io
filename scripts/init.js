// JavaScript to handle menu button click
document.querySelector('.hamburger-menu-button').addEventListener('click', function() {
    toggleHamburgerMenu()
});



const navItems = document.querySelectorAll('.nav-item')
const isMenuResponsive = window.innerWidth <= 768;

navItems.forEach(function(element) {
  element.addEventListener('click', function() {
    if (isMenuResponsive) {
      toggleHamburgerMenu()
    }
  });
});
  
// JavaScript to handle scroll event
window.addEventListener('scroll', function() {
  document.body.classList.toggle('scrolled', window.scrollY > 0);
});

let isMenuOpen = false;

function toggleHamburgerMenu() {
  const hamburgerIconUnicode = '&#9776;';
  const xIconUnicode = '&#x2715;';

  const newIcon = isMenuOpen ? hamburgerIconUnicode : xIconUnicode
  document.getElementById("hamburger-menu-button").innerHTML = newIcon
  isMenuOpen = !isMenuOpen

  document.querySelector('nav').style.display = document.querySelector('nav').style.display === 'flex' ? 'none' : 'flex';
}

// Navbar scroll to anchor
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));

      window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth'
      });
  });
});