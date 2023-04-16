let hamburger = document.querySelector('.fa-bars');
let cross = document.querySelector('.fa-times');
let menu = document.querySelector('.menu');
hamburger.onclick = () =>{
    menu.style.left = '0';
    cross.classList.remove('hide');
    hamburger.classList.add('hide');
}
cross.onclick = () =>{
    menu.style.left = '100vw';
    cross.classList.add('hide');
    hamburger.classList.remove('hide');
}

let menuitems = document.querySelectorAll('.menu .item');
menuitems.forEach(itemact);

function itemact(item){
    item.onclick=()=>{
        menu.style.left = '100vw';
        cross.classList.add('hide');
        hamburger.classList.remove('hide');
    }
}