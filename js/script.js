let menu=document.querySelectorAll('.menu')[0];
let closeMenu=document.getElementById('close-menu');
let openMenu=document.getElementById('toggle-menu');

openMenu.addEventListener('click',()=>{
menu.classList.toggle('menu-open')

})

closeMenu.addEventListener('click',()=>{
    menu.classList.toggle('menu-open')
});