document.addEventListener("DOMContentLoaded", function () {
    const carouselElement = document.querySelector("#carouselExample");
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, 
        ride: "carousel", 
        pause: false,     
    });
});
