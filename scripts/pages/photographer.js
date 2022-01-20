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
    mediaCardDOM.addEventListener("click", () =>
      clickLightbox(mediaCardDOM.children[0])
    );
    photographersPortfolio.appendChild(mediaCardDOM);
  });

  /* Lightbox */

  const lightbox = document.querySelector(".lightbox");
  const lightboxMedia = document.querySelector(".lightboxMedia");
  const lightboxTitle = document.querySelector(".title");

  const clickLightbox = (element) => {
    const lightboxTitleLink = element.nextSibling.firstChild;
    lightboxTitle.textContent = lightboxTitleLink.textContent;

    const mediaLightboxLink = element.src;

    if (mediaLightboxLink.includes(".jpg")) {
      const img = document.createElement("img");
      img.setAttribute("src", mediaLightboxLink);
      img.dataset.id = element.dataset.id;
      lightboxMedia.appendChild(img);
    }

    if (mediaLightboxLink.includes(".mp4")) {
      const video = document.createElement("video");
      video.setAttribute("src", mediaLightboxLink);
      video.setAttribute("controls", "");
      video.dataset.id = element.dataset.id;
      lightboxMedia.appendChild(video);
    }
    lightbox.style.display = "flex";
  };

  const Previous = () => {
    let lightboxMediaChild =
      document.querySelector(".lightboxMedia").firstElementChild;

    const result = portfolio.find(
      (element) => element.id === parseInt(lightboxMediaChild.dataset.id, 10)
    );

    let i = portfolio.indexOf(result);

    if (i === 0) {
      i = portfolio.length;
    }
    const nextMedia = portfolio[i - 1];

    if (nextMedia.image) {
      const newImage = nextMedia.image;
      const picture = `assets/media/${newImage}`;
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.dataset.id = portfolio[i - 1].id;

      lightboxMedia.innerHTML = "";
      lightboxMedia.appendChild(img);
      lightboxTitle.textContent = nextMedia.title;
    }

    if (nextMedia.video) {
      const newVideo = nextMedia.video;
      const movie = `assets/media/${newVideo}`;
      const videoDisplay = document.createElement("video");
      videoDisplay.setAttribute("src", movie);
      videoDisplay.setAttribute("controls", "");
      videoDisplay.dataset.id = portfolio[i - 1].id;

      lightboxMedia.innerHTML = "";
      lightboxMedia.appendChild(videoDisplay);
    }

    lightboxMediaChild =
      document.querySelector(".lightboxMedia").firstElementChild;
  };

  const Next = () => {
    let lightboxMediaChild =
      document.querySelector(".lightboxMedia").firstElementChild;

    const result = portfolio.find(
      (element) => element.id === parseInt(lightboxMediaChild.dataset.id, 10)
    );

    let i = portfolio.indexOf(result);

    if (i === portfolio.length - 1) {
      i = -1;
    }
    const nextMedia = portfolio[i + 1];

    if (nextMedia.image) {
      const newImage = nextMedia.image;
      const picture = `assets/media/${newImage}`;
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.dataset.id = portfolio[i + 1].id;

      lightboxMedia.innerHTML = "";
      lightboxMedia.appendChild(img);
      lightboxTitle.textContent = nextMedia.title;
    }
    if (nextMedia.video) {
      const newVideo = nextMedia.video;
      const movie = `assets/media/${newVideo}`;
      const videoDisplay = document.createElement("video");
      videoDisplay.setAttribute("src", movie);
      videoDisplay.setAttribute("controls", "");
      videoDisplay.dataset.id = portfolio[i + 1].id;

      lightboxMedia.innerHTML = "";
      lightboxMedia.appendChild(videoDisplay);
    }

    lightboxMediaChild =
      document.querySelector(".lightboxMedia").firstElementChild;
  };

  document.getElementById("previous").addEventListener("click", () => {
    Previous();
  });

  document.getElementById("next").addEventListener("click", () => {
    Next();
  });

  function closeLightbox() {
    lightbox.style.display = "none";
    lightboxMedia.innerHTML = "";
  }

  document.getElementById("close").addEventListener("click", () => {
    closeLightbox();
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
