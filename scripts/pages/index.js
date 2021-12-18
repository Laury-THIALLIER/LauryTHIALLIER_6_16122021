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
  const photographersSection = document.querySelector(".photographer_section");

  photographerData.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
