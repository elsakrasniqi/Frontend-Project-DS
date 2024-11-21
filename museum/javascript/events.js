let currentIndex = 0;

function updateCarousel() {
    const carouselInner = document.querySelector(".carousel-inner");
    const items = document.querySelectorAll(".carousel-item");
    const totalItems = items.length;

    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    const items = document.querySelectorAll(".carousel-item");
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
}

function prevSlide() {
    const items = document.querySelectorAll(".carousel-item");
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
}

document.addEventListener("DOMContentLoaded", () => {
    updateCarousel();
});
