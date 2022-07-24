$(document).ready(function () {

    // SWIPER 
    var swiper = new Swiper(".swiperTestimonials", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // SCROLL TO TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#scroller').fadeIn();
        } else {
            $('#scroller').fadeOut();
        }
    });
    $('#scroller').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // BURGER

    $('.burger').click(function () {
        $('body').toggleClass('open-mobile-menu')
    })












})