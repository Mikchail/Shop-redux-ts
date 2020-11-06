$(function () {
//    форма поиска начало
    $('.search__form-clear').on('click', function () {
        $('.search__form input, .search__form select').each(function () {
            $(this).val('');
        });
        $('select').trigger('refresh');
    });


    function formSearch(formSearchFlag) {
        if (formSearchFlag.matches) {
            $('.search__form').removeAttr('style');
            $('.search__title').unbind('click', searchShowHide).removeClass('on');
        } else {
            $('.search__title').bind('click', searchShowHide);
        }
    }

    var formSearchFlag = window.matchMedia("screen and (min-width: 768px)");
    formSearchFlag.addListener(formSearch);
    formSearch(formSearchFlag);

    function searchShowHide() {
        $(this).toggleClass('on').next('.search__form').slideToggle();
    }

//    форма поиска конец
});
