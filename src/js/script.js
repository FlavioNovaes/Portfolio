const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        btnTopo.classList.add('show');
    } else {
        btnTopo.classList.remove('show');
    }
});

const themeToggle = document.getElementById('toggleTheme');
const themeIcon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
})

const menuToggle = document.getElementById('menuToggle');
const navbar = document.getElementById('navbar');
const menuIcon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');

  if (navbar.classList.contains('open')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-xmark');
  } else {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.add('fa-bars');
  }
});

const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('open');

        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});