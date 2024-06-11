document.addEventListener("DOMContentLoaded", function() {
    const carouselInner = document.querySelector(".carousel-inner");
    let currentIndex = 0;
    setInterval(() => {
        currentIndex = (currentIndex + 1) % carouselInner.children.length;
        const offset = -currentIndex * carouselInner.clientWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }, 3000);
});