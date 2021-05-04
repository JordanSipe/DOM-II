// Your code goes here

//Selectors
const mainNav = document.querySelector(".main-navigation");
const navContainer = mainNav.querySelector(".nav-container");
const logoHead = navContainer.querySelector(".logo-heading");
const nav = navContainer.querySelector(".nav");
const anchors = nav.querySelectorAll(".nav-link");

const body = document.querySelector(".home");
const intro = document.querySelector(".intro");
const introImg = intro.querySelector("img");
const introHeader = intro.querySelector("h2");
const introPara = intro.querySelector("p");



// Event Listeners
introHeader.addEventListener("mouseover", function(event) {
    event.target.style.color = "white";
});
introHeader.addEventListener("mouseleave", function(event) {
    event.target.style.color = "";
});

introPara.addEventListener("mouseover", function(event) {
    event.target.style.color = "white";
});
introPara.addEventListener("mouseleave", function(event) {
    event.target.style.color = "";
});
