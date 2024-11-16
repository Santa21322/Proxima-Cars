const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector('.navbar');


// controlling navbar
menuBtn.addEventListener('click', function (){
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('show-navbar')
})

window.addEventListener('scroll', function (){
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('show-navbar') 
})


const loginBtn = document.querySelector('#login-btn');
const closeLogin = document.querySelector('#close-login-form');

// controlling form
loginBtn.addEventListener('click', function (){
    document.querySelector('.login-form-container').classList.toggle('show-login')
})

closeLogin.addEventListener('click', function (){
    document.querySelector('.login-form-container').classList.remove('show-login')
})


const home = document.querySelector('.home')
const homePar = document.querySelectorAll('.home-parallax')

// controlling home page