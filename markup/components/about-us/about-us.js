window.addEventListener('load', function () {
    if(document.querySelector('.about__slider') != null) {
        var aboutSlider = new Swiper('.about__slider', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                600: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
});
