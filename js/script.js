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

// крутилка на кнопке
const btn = document.getElementById('btn-left');
const spanText = document.getElementById('span-text');
btn.onmouseover = btn.onmouseout = handler;

function handler(event) {

  function str(el) {
    if (!el) return "null"
    return el.className || el.tagName;
  }


  if (event.type == 'mouseover') {

    spanText.style.transform = "rotateY(180deg)";
    spanText.style.padding = '0 0 0 20px';
  }
  if (event.type == 'mouseout') {
    spanText.style.transform = 'none';
    spanText.style.padding = '0';
  }
}

// fixed header

const header = document.querySelector('.header-header');
const main = document.getElementById('main');
// let headerHeight = header.offset
console.log(header);
