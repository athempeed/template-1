document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript Loaded!");

    // Initialize Swiper
    const swiper = new Swiper(".swiper", {
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
        },
    });
});
