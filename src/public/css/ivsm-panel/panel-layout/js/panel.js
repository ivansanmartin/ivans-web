const titleDesktop = document.getElementById("title-desktop");
const layoutContent = document.getElementById("layout-content")
const buttonDisplayMenu = document.getElementById("menu");
let buttonExpanded = document
    .getElementById("menu")
    .getAttribute("aria-expanded");
const verticalMenu = document.getElementById("vertical-menu");

const colabs = document.getElementById("colabs");
const users = document.getElementById("users");
const routines = document.getElementById("routines");


layoutContent.addEventListener("click", () => {
    if (buttonExpanded) {
        verticalMenu.classList.remove("activated");
        titleDesktop.style.visibility = "visible";
    }
})

buttonDisplayMenu.addEventListener("click", () => {
    if (buttonExpanded) {
        verticalMenu.classList.add("activated");
        titleDesktop.style.visibility = "hidden";
        buttonExpanded = true;
    }
});
