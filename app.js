
//The toggle bar
let header = document.querySelector('header');
let toggle__menu = document.querySelector('.toggle__menu');

toggle__menu.onclick = function(){
    header.classList.toggle('active');
}