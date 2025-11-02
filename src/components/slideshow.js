document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slideshow .slide");
  let current = 0;

  slides.forEach(slide => slide.classList.remove("active"));
  slides[0].classList.add("active");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 5000); 
});