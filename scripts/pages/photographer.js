// Mettre le code JavaScript lié à la page photographer.html
let photographerData = [];
let photographerMedia = [];

async function getPhotographers() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographerData = data.photographers))
    .catch((err) => console.log("Error : " + err));

  //   console.log(photographerData[0]);

  // et bien retourner le tableau photographers seulement une fois
  return photographerData;
}

async function getMedias() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographerMedia = data.media))
    .catch((err) => console.log("Error : " + err));

  //   console.log(photographerMedia[0]);

  // et bien retourner le tableau photographers seulement une fois
  return photographerMedia;
}

/* Photographer profile */

async function displayData(photographers) {
  const photographersHeader = document.querySelector(".photographer_header");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idURL = urlParams.get("id");
  const profile = photographerData.find((element) => element.id == idURL);

  const photographersProfile = photographerProfileFactory(profile);
  const profileCardDOM = photographersProfile.getProfileCardDOM();
  photographersHeader.appendChild(profileCardDOM);
}

/* Photographer portfolio */

async function displayPortfolio(photographers) {
  const photographersPortfolio = document.querySelector(
    ".photographer_portfolio"
  );

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idURL = urlParams.get("id");
  const portfolio = photographerMedia.filter(
    (element) => element.photographerId == idURL
  );

  portfolio.forEach((media) => {
    const photographerMedia = photographerMediaFactory(media);
    const mediaCardDOM = photographerMedia.getMediaCardDOM();
    photographersPortfolio.appendChild(mediaCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
  const { medias } = await getMedias();
  displayPortfolio(medias);
}

init();
