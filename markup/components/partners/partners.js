window.addEventListener('load', function () {
    if (document.querySelector('.partners__slider') != null) {
        var partnersSlider = new Swiper('.partners__slider', {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                1200: {
                    slidesPerView: 5,
                    spaceBetween: 60,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
                600: {
                    slidesPerView: 3,
                    spaceBetween: 45,
                },
            },
        });
    }
});
