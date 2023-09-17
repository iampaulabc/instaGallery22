document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".carousel-slide");
  let currentSlide = 0;

  function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = "block";
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
});
