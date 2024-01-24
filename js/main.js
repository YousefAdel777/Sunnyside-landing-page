let menu = document.querySelector("header nav ul");
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("d-flex");
});