const navBars = document.querySelector('.nav__bars');
const navMenu = document.querySelector('.nav__menu');

navBars.addEventListener('click', ()=>{
    navMenu.classList.toggle('nav__menu-click')
})

window.addEventListener('click', e=>{
    if(navMenu.classList.contains('nav__menu-click') && e.target != navMenu && e.target != navBars){
        navMenu.classList.toggle("nav__menu-click")
    }
})