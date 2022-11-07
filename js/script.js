const burger = document.querySelector('.burger');
const content = document.querySelector('.header__content');
const navLink = document.querySelectorAll('.nav-link');


function openMenu(){
    const activeBurger =  burger.classList.toggle('active');
    const activeContent = content.classList.toggle('active');
    if(activeBurger){
        document.body.style.overflow = 'hidden';
    }if(!activeBurger){
        document.body.style.overflow = 'auto';
    }
}

burger.addEventListener('click', openMenu)

function closeMenu(){
    burger.classList.remove('active');
    content.classList.remove('active');
    document.body.style.overflow = 'scroll';
}




navLink.forEach(n => n.addEventListener('click', closeMenu));



// fixed header

const header = document.querySelector('.header-header');
const main = document.getElementById('main');
let headerHeight = header.offsetHeight;
const mainHeight = main.offsetHeight;
window.addEventListener('scroll', ()=>{
  let scrollDistance = window.scrollY;

  if(scrollDistance >= 80){
    header.classList.add('header-fixed');
  }else{
    header.classList.remove('header-fixed');
  }
})


let swiper = new Swiper(".swiper1",{
  spaceBetween: 30,

  centerSlides: 'true',
  fade: 'true',
  breakpoints: {
      320: {
          slidesPerView: 1.5,
          spaceBetween: 130,
      },
      950: {
          slidesPerView: 1.5,
          spaceBetween: 50,
      },
      1095: {
          slidesPerView: 3,
      },
  }
});