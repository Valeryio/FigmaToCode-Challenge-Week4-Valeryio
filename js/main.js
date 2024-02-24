
let menuIcon = document.querySelector(".amburger-menu");
console.log(menuIcon);

let navbarLinks = document.querySelector(".navbar-links-container");
console.log(navbarLinks);

let resumeDownloadButton = document.querySelector("button[data-icon='download']");
console.log(resumeDownloadButton);

menuIcon.addEventListener("click", (e) =>
{
    navbarLinks.classList.toggle("appear");
})