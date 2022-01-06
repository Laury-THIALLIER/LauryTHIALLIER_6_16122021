function photographerMediaFactory(data) {
  const { photographerId, title, image, likes } = data;

  const picture = `assets/media/${image}`;

  function getMediaCardDOM() {
    media = document.createElement("div");
    media.setAttribute("class", "media");

    details = document.createElement("div");
    details.setAttribute("class", "details");

    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2 = document.createElement("h2");
    h2.textContent = title;

    const pLikes = document.createElement("p");
    pLikes.innerHTML = likes + " <i class='fas fa-heart'></i>";

    media.appendChild(img);
    media.appendChild(details);
    details.appendChild(h2);
    details.appendChild(pLikes);
    return media;
  }

  return { photographerId, title, image, likes, getMediaCardDOM };
}
