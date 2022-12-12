'use strict';

let menuIcon = document.querySelector('ion-icon[name="menu-outline"]');
let menu = document.querySelector('.mobile-nav');
let btn =  document.querySelector(".copyright");
let copy_Right =   document.querySelector(".text-crypto");
let body_container = document.querySelector('#Body-Container')
let state = false;



menuIcon.addEventListener('click', () => {
    if (!state) {
        menuIcon.name = 'close-outline';
        menu.style.right = '0';
    } else {
        menuIcon.name = 'menu-outline';
        menu.style.right = '-85%';
    }
    state = !state;
});


btn.addEventListener('click',()=>{
   
        copy_Right.style.display = 'inline';
        body_container.style.display = 'none';    
})
