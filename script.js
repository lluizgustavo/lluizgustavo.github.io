const navImage = document.querySelectorAll('.nav-image');
const contact = document.querySelector("#contact");
const myLogoImage = document.querySelector("#my-logo-image");
const devWeb = document.getElementById("h3");
const aboutMe = document.querySelector(".about-me");


const mouseOn = (event) => {
  event.target.style.width= "55px";
};

const mouseOut = (event) => {
  event.target.style.width = "40px";
};

const mouseOnForH3 = (event) => {
  event.currentTarget.style.fontSize = "1.5em"; 
};

const mouseOutForH3 = (event) => {
  event.currentTarget.style.fontSize = "1.25em"; 
};

const mouseOnAboutMe = (event) => {
  event.currentTarget.style.fontSize = "1.10em"; 
};

const mouseOutAboutMe = (event) => {
  event.currentTarget.style.fontSize = "0.81em"; 
};


const mediaQuery = window.matchMedia("(min-width: 1281px)");


const handleResponsiveness = (e) => {
  if (e.matches) {
    // Tela GRANDE (>= 1281px): Adiciona os ouvintes de evento
    for (let index = 0; index < navImage.length; index += 1) {
      navImage[index].addEventListener("mouseover", mouseOn);
      navImage[index].addEventListener("mouseleave", mouseOut);
    }

    if (devWeb) {
      devWeb.addEventListener("mouseover", mouseOnForH3);
      devWeb.addEventListener("mouseleave", mouseOutForH3);
    }

    if (aboutMe) {
      aboutMe.addEventListener("mouseover", mouseOnAboutMe);
      aboutMe.addEventListener("mouseleave", mouseOutAboutMe);
    }
  } else {

    for (let index = 0; index < navImage.length; index += 1) {
      navImage[index].removeEventListener("mouseover", mouseOn);
      navImage[index].removeEventListener("mouseleave", mouseOut);
      navImage[index].style.transform = ""; 
    }

    if (devWeb) {
      devWeb.removeEventListener("mouseover", mouseOnForH3);
      devWeb.removeEventListener("mouseleave", mouseOutForH3);
      devWeb.style.fontSize = ""; 
    }

    if (aboutMe) {
      aboutMe.removeEventListener("mouseover", mouseOnAboutMe);
      aboutMe.removeEventListener("mouseleave", mouseOutAboutMe);
      aboutMe.style.fontSize = "";
    }
  }
};

handleResponsiveness(mediaQuery);

mediaQuery.addEventListener("change", handleResponsiveness);

const projectsBtn = document.querySelector("#projects");
if (projectsBtn) {
  projectsBtn.addEventListener("click", () => {
    window.open("https://github.com/lluizgustavo?tab=repositories", "_blank");
  });
}