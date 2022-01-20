function photographerMediaFactory(data) {
  const { photographerId, id, title, image, video, likes } = data;

  function getMediaCardDOM() {
    media = document.createElement("div");
    media.setAttribute("class", "media");

    details = document.createElement("div");
    details.setAttribute("class", "details");

    if (image) {
      const picture = `assets/media/${image}`;
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.dataset.id = id;
      img.setAttribute("class", "media-img");
      media.appendChild(img);

      const h2 = document.createElement("h2");
      h2.textContent = title;
      details.appendChild(h2);
    }

    if (video) {
      const videotape = `assets/media/${video}`;
      const photographerVideo = document.createElement("video");
      photographerVideo.setAttribute("src", videotape);
      media.appendChild(photographerVideo);
      photographerVideo.dataset.id = id;

      const h2 = document.createElement("h2");
      h2.textContent = title;
      details.appendChild(h2);
    }

    const pLikes = document.createElement("p");
    pLikes.innerHTML = likes + " <i class='fas fa-heart'></i>";

    media.appendChild(details);
    details.appendChild(pLikes);
    return media;
  }

  return { photographerId, id, title, image, video, likes, getMediaCardDOM };
}
