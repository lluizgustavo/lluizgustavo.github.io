const navImage = document.querySelectorAll('.nav-image');
const contact = document.querySelector("#contact")
const myLogoImage = document.querySelector("#my-logo-image")

const mouseOn = (event) => {
    event.target.style.width = "45px";
    
}

const mouseOut = (event) => {
    event.target.style.width = "35px";
}

for (let index = 0; index < navImage.length; index += 1) {
    navImage[index].addEventListener("mouseover", mouseOn)
    navImage[index].addEventListener("mouseleave", mouseOut)
}

