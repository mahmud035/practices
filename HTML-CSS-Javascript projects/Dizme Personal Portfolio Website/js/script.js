const header = document.querySelector('header');

//Navigation bar effects on scroll
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0);

  // INFO:The scrollY property returns the pixels a document has scrolled from the upper left corner of the window.
});

const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.nav-list');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navList.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navList.classList.remove('active');
};

const sr = ScrollReveal({
  distance: '45px',
  duration: 2700,
  reset: true,
});

sr.reveal('.home-text', { delay: 350, origin: 'left' });
sr.reveal('.home-img', { delay: 350, origin: 'right' });

sr.reveal(
  '.sub-service, .about, .portfolio, .service, .complete-task,.contact',
  { delay: 200, origin: 'bottom' }
);
