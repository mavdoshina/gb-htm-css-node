document.addEventListener('DOMContentLoaded', function(){
    let menuButton = document.querySelector('.menu'),
        menuList = document.querySelector('.header-menu'),
        menuClose = document.querySelector('.header-menu-close');
    menuButton.addEventListener('click', function() {
        menuList.classList.toggle('active-menu');
    });

    menuClose.addEventListener('click', function() {
        menuList.classList.remove('active-menu');
    });


    $('.slider-element').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: false,
        arrows: true,
        prevArrow: '<button class="arrow arrow-left"></i><i class="arrow-icon fa-solid fa-chevron-left"></i></button>',
        nextArrow: '<button class="arrow arrow-right"><i class="arrow-icon fa-solid fa-chevron-right"></button>',
    });
})