const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");
const navLinks = document.querySelector(".linksa a")

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

navLinks.foeEach(links => {
    links.addEventListener("click",() => {
        nav.classList.remove("active");
        menu.classList.remove("bx-x");
    });
});