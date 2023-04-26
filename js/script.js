console.log("Cześć!");

let button = document.querySelector(".button__headerRemove");
let header = document.querySelector(".header__title");

button.addEventListener("click", () => {
    header.remove();
})


let body = document.querySelector(".body");
let dark_mode = document.querySelector(".button__darkMode");
let themeName = document.querySelector(".themeName");
dark_mode.addEventListener("click", () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains("dark") ? "Białe" : "Szare"});


