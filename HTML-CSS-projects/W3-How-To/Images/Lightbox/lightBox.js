let slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function openModal() {
  document.getElementById('myModal').style.display = 'block';
  showSlides(slideIndex); // Show the current slide when the modal opens
}

function closeModal() {
  document.getElementById('myModal').style.display = 'none';
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
