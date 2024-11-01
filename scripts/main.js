(function () {
    window.addEventListener('load', function () {
        const loadTime = performance.now();

        const loadTimeInSeconds = (loadTime / 1000).toFixed(2);

        const footer = document.querySelector('footer');
        if (footer) {
            const loadTimeMessage = document.createElement('p');
            loadTimeMessage.textContent = `Время загрузки страницы: ${loadTimeInSeconds} секунд`;
            footer.appendChild(loadTimeMessage);
        }
    });
})();

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
});
