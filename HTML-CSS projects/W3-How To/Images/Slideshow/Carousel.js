let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  slides.forEach((slide) => (slide.style.display = 'none'));
  dots.forEach((dot) => (dot.className = dot.className.replace(' active', '')));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

// Automatic slideshow functionality
function autoSlide() {
  plusSlides(1); // Move to the next slide
}

// Set the interval for the slideshow (e.g., 5000ms = 5 seconds)
const intervalTime = 5000;
let slideInterval = setInterval(autoSlide, intervalTime);

// Optional: Pause the slideshow on hovering over the slideshow container
const slideshowContainer = document.querySelector('.slideshow-container');

slideshowContainer.addEventListener('mouseenter', () => {
  clearInterval(slideInterval); // Pause the slideshow
});

slideshowContainer.addEventListener('mouseleave', () => {
  slideInterval = setInterval(autoSlide, intervalTime); // Resume the slideshow
});
