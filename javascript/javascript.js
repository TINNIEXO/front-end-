let menuButton = document.querySelector("button");

console.log(menuButton);

menuButton.addEventListener("click",toggleMenu);

function toggleMenu(){
    menuButton.classList.toggle("is-open");
}

