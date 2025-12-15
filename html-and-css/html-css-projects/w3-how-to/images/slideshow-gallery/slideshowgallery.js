let slideIndex = 1;

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
  const dots = document.querySelectorAll('.demo');
  const captionText = document.getElementById('caption');

  if (n > slides.length) slideIndex = 1; // Loop back to the first slide
  if (n < 1) slideIndex = slides.length; // Loop to the last slide

  slides.forEach((slide) => (slide.style.display = 'none'));
  dots.forEach((dot) => (dot.className = dot.className.replace(' active', '')));

  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Show the first slide when the page loads
document.addEventListener('DOMContentLoaded', () => {
  showSlides(slideIndex);
});
