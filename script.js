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
})