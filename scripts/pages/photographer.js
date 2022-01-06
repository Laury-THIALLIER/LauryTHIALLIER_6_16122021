// Mettre le code JavaScript lié à la page photographer.html
let photographerData = [];

async function getPhotographers() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographerData = data.photographers))
    .catch((err) => console.log("Error : " + err));

  //   console.log(photographerData[0]);

  // et bien retourner le tableau photographers seulement une fois
  return photographerData;
}

async function displayData(photographers) {
  const photographersHeader = document.querySelector(".photographer_header");

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idURL = urlParams.get("id");
  const profile = photographerData.find((element) => element.id == idURL);

  const photographersProfile = photographerProfileFactory(profile);
  const userCardDOM = photographersProfile.getUserCardDOM();
  photographersHeader.appendChild(userCardDOM);
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
