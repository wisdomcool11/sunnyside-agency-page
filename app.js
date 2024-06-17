
//The toggle bar
let header = document.querySelector('header');
let toggle__menu = document.querySelector('.toggle__menu');

toggle__menu.onclick = function(){
    header.classList.toggle('active');
}

ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
})

ScrollReveal().reveal('.hero__wrap h1', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.hero__wrap .fa-solid, .footer__wrap h3', {delay: 700, origin: 'top'});
ScrollReveal().reveal(' .box__content h2, .box__content p, .box__content a', {delay: 800, origin: 'right', interval: 200});
ScrollReveal().reveal('.box__content', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.box__img', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.box-03 .box__img', {delay: 600, origin: 'bottom', interval: 300});
ScrollReveal().reveal('.testimonials h2', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.testimonial__card, .social__icon i', {delay: 600, origin: 'bottom', interval: 300});