let currentSlide = 1;
const totalSlides = 6;
let slideInterval;

function updateSlidePosition() {
    const banner = document.querySelector('.banner');
    const offset = (currentSlide - 1) * -100;
    banner.style.transform = `translateX(${offset}%)`;
    document.querySelector(`#radio${currentSlide}`).checked = true;
}

function nextSlide() {
    currentSlide = (currentSlide % totalSlides) + 1;
    updateSlidePosition();
}

function prevSlide() {
    currentSlide = (currentSlide - 2 + totalSlides) % totalSlides + 1;
    updateSlidePosition();
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000);
}

function pauseAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

document.getElementById('next-btn').addEventListener('click', () => {
    pauseAutoSlide();
    nextSlide();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    pauseAutoSlide();
    prevSlide();
});

// Inicializa o carrossel automático
startAutoSlide();


