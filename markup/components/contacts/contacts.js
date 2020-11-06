window.addEventListener('load', function () {
    if (document.querySelector('.partners-list') != null) {
        var breakpoint = window.matchMedia('(min-width:1024px)');
        var partnersList;
        var breakpointChecker = function () {

            if (breakpoint.matches === true) {

                if (partnersList !== undefined) partnersList.destroy(true, true);
                return;
            } else if (breakpoint.matches === false) {
                return enableSwiper();

            }

        };

        const enableSwiper = function () {

            partnersList = new Swiper('.partners-list', {
                slidesPerView: 1,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    600: {
                        slidesPerView: 3,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                },
            });

        };

        breakpoint.addListener(breakpointChecker);
        breakpointChecker();
    }
});
