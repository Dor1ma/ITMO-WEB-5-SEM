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
