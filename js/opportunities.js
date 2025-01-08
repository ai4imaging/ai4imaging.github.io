document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
});