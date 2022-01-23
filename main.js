// Interactive Toggle menu 
const Menu = document.getElementById("menu");
const Nav = document.getElementById("nav");
const ToggleClose = document.getElementById("toggle-close");


const Open = () => {
    Nav.style.right = "0";
    Menu.style.display = "none";
}

const Close = () => {
    Nav.style.right = "-427px";
    Menu.style.display = "block"
}