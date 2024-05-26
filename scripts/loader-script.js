var loader = document.querySelector('.loader');

window.addEventListener("load", function () {
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
    window.scrollTo({ top: 0, behavior: 'smooth' });
})