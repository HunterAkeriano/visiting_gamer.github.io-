let humb = document.querySelector('.burger');
let navMenu = document.querySelector('.header__top-nav-ul');
let navLinks = document.querySelector('.header__top-links');



function mobileMenu(){
   let nav = humb.classList.toggle('active');
    navMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
    if(nav){
        document.body.style.overflow = 'hidden';
    }if(!nav){
        document.body.style.overflow = 'scroll';
    }
}

humb.addEventListener('click', mobileMenu);

const navLink = document.querySelectorAll('.header__top-nav-ul');

function closeMenu(){
    humb.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = 'scroll';
}




navLink.forEach(n => n.addEventListener('click', closeMenu));