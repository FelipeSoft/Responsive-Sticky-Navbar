const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
const navbar = c('header');

cs('#bars, .menu-mobile i').forEach(element => {
    element.addEventListener('click', ()=>{
        if(c('.menu-mobile').style.marginRight == '-100vw'){
            c('.menu-mobile').style.marginRight = '100vw';
        } else {
            c('.menu-mobile').style.marginRight = '-100vw';
        }
    });
})


window.onscroll = () =>{ 
    if(window.scrollY > navbar.offsetTop){
        navbar.classList.add('sticky');
        c('header h1').style.color = 'white';
        c('header span').style.color = 'white';
        c('#bars').style.color = 'white';
        cs('header nav ul li a').forEach(element => {
            element.style.color = 'white';
        });
    } else {
        navbar.classList.remove('sticky');
        c('header h1').style.color = 'black';
        c('header span').style.color = 'rgb(49, 92, 219)';
        c('#bars').style.color = 'black';
        cs('header nav ul li a').forEach(element => {
            element.style.color = 'black';
        });
    }
}

