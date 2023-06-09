const navMenu = document.getElementById('nav-menu');
      navToggle = document.getElementById('nav-toggle');
      navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    window.location.href = "mailto:anamquirosa@gmail.com";
  });
  

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
  })
  
  sr.reveal(`.hero .container-medium`)
  sr.reveal(`.experience .container-medium`, {delay:500})
  sr.reveal(`.project, .contact`, {interval: 100})