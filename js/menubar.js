const navbar = document.querySelector(".nav-content")
const menuButton = document.querySelector(".menu")

menuButton.addEventListener("click", () => {
    navbar.classList.toggle("show-menu")
});