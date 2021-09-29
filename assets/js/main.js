// menu 
const burgerElement = document.querySelector('.burger');
const menuMobile = document.querySelector('.menu-sp');

burgerElement.addEventListener('click', function () {


    if (menuMobile.classList.contains('show')) {
        menuMobile.classList.remove('show');
        $('html,body').css('overflowY', 'auto');
    } else {
        menuMobile.classList.add('show');
        $('html,body').css('overflowY', 'hidden');
    }
});


