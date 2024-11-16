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

// paralloxing the home page

document.querySelector('.home').onmousemove = (e) => {
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');
       let x = (e.pageX - window.innerWidth / 2) * speed / 90;
        let y = (e.pageY - window.innerHeight / 2) * speed / 90;

        elm.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}


document.querySelector('.home').onmouseleave = () => {
    document.querySelectorAll('.home-parallax').forEach(elm => {

        elm.style.transform = `translateX(0px) translateY(0px)`;
    });
}

 var swiper = new Swiper(".vehicles-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grapCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

     var swiper = new Swiper(".featured-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grapCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });

     var swiper = new Swiper(".reviews-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      grapCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
    });