window.onload = function () { //Loading效果 與 Aos初始化

    setTimeout(function () {
        $('.header').removeClass('noactive')
        $(".loading_page").fadeOut(500);
    }, 500);
    $('.header').addClass('noactive')
    $(".loading_page").fadeIn(200)

};