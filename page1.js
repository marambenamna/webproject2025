const slides = document.querySelectorAll(".next-slide");
let currentSlide = 0;

function changeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 4000); 
