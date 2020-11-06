$(function () {

    //ie полифил начало
    var ie11Styles = [
        'msTextCombineHorizontal'];

    var s = document.body.style,
        brwoser = null,
        property;

    for (var i = 0; i < ie11Styles.length; i++) {
        property = ie11Styles[i];
        if (s[property] != undefined) {
            brwoser = "ie11";
            $('body').addClass('ie11');
        }
    }
    //ie полифил конец

    $('a[data-src]').fancybox();
    $('.gallery').fancybox();

    //мобильное меню начало
    $('.menu-btn').on('click', function () {
        $(this).toggleClass('on');
        $('.main-header__menu').slideToggle();
    });

    function mobileMenu(mobileMenuFlag) {
        if (mobileMenuFlag.matches) {
            $('.main-header__submenu').removeAttr('style');
            $('.main-header__menu').removeAttr('style');
            $('.submenu').unbind('click', toggleSubMenu).removeClass('on');
            $('.menu-btn').removeClass('on');
        } else {
            $('.submenu').bind('click', toggleSubMenu);
        }
    }

    var mobileMenuFlag = window.matchMedia("screen and (min-width: 1200px)");
    mobileMenuFlag.addListener(mobileMenu);
    mobileMenu(mobileMenuFlag);

    function toggleSubMenu() {
        $(this).toggleClass('on').children('.main-header__submenu').slideToggle();
    }

//    мобильное меню конец
//    полифил img начало
    objectFitImages('img.bg-thumb');
    // object-fit: cover;
    // object-position: center;
    // font-family: 'object-fit: cover; object-position: center;';
//    полифил img конец
//    инициализация select начало
    $('select').styler();
//    инициализация select конец

//    lang меню начало
    $('.lang_desktop .lang__btn').on('click', function () {
        $(this).next().slideToggle();
    })
//    lang меню конец
});
