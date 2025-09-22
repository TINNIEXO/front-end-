
// hamburger menu button//

let menuButton = document.querySelector("button");

console.log(menuButton);

menuButton.addEventListener("click",toggleMenu);

function toggleMenu(){
    menuButton.classList.toggle("is-open");
}




document.querySelector("header button");
document.querySelector("header nav");

const hamBurgerKnopje = document.querySelector("header button");
const openMenu = document.querySelector("header nav");

hamBurgerKnopje.addEventListener("click",toonMenu);

function toonMenu(){
    openMenu.classList.toggle("toonMenu");
}



