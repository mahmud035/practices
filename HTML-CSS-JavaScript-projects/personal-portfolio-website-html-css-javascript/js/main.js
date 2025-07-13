//Navigation bar effects on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
  // INFO:The scrollY property returns the pixels a document has scrolled from the upper left corner of the window.
});

// Services section - Modal
const serviceModals = document.querySelectorAll('.service-modal');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
const modalCloseBtns = document.querySelectorAll('.modal-close-btn');

let modal = function (modalClick) {
  serviceModals[modalClick].classList.add('active'); //? Not clear
};

learnMoreBtns.forEach((learnMoreBtn, i) => {
  learnMoreBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener('click', () => {
    serviceModals.forEach((modalView) => {
      // console.log(modalView);
      modalView.classList.remove('active');
    });
  });
});

//Portfolio section - Modal

//Our clients - Swiper

//Website dark/light theme

//Scroll to top button

//Navigation menu items active on page scroll

//Responsive navigation menu toggle

//Scroll reveal animations
//Common reveal options to create reveal animations

//Target elements, and specify options to create reveal animations
