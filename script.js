const navImage = document.querySelectorAll('.nav-image');
const contact = document.querySelector("#contact")
const myLogoImage = document.querySelector("#my-logo-image")
const devWeb = document.querySelector("h3")
const aboutMe = document.querySelector(".about-me")


const mouseOn = (event) => {
    event.target.style.width = "45px";
    
}

const mouseOut = (event) => {
    event.target.style.width = "35px";
}

const mouseOnForH3 = (event) => {
    event.target.style.fontSize = "20px";
}

const mouseOutForH3 = (event) => {
    event.target.style.fontSize = "18px";
}

const mouseOnAboutMe = (event) => {
    event.target.style.fontSize = "14px";
}

const mouseOutAboutMe = (event) => {
    event.target.style.fontSize = "12px";
}

for (let index = 0; index < navImage.length; index += 1) {
    navImage[index].addEventListener("mouseover", mouseOn)
    navImage[index].addEventListener("mouseleave", mouseOut)
}


devWeb.addEventListener("mouseover", mouseOnForH3);
devWeb.addEventListener("mouseleave", mouseOutForH3);

aboutMe.addEventListener("mouseover", mouseOnAboutMe);
aboutMe.addEventListener("mouseleave", mouseOutAboutMe);

document.querySelector("#projects").addEventListener("click", () => {
    window.open("https://github.com/lluizgustavo?tab=repositories", "_blank");
});