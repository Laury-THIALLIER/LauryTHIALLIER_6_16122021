export default function photographerMediaFactory(data) {
  const { photographerId, id, title, image, video, likes } = data;

  function getMediaCardDOM() {
    const media = document.createElement("div");
    media.setAttribute("class", "media");
    media.setAttribute("id", id);

    const details = document.createElement("div");
    details.setAttribute("class", "details");

    if (image) {
      const picture = `assets/media/${image}`;
      const img = document.createElement("img");
      img.setAttribute("src", picture);
      img.dataset.id = id;
      img.setAttribute("class", "media-img");
      media.appendChild(img);
      img.setAttribute("alt", title + ", closeup view");
      img.setAttribute("tabindex", "0");

      const h2 = document.createElement("h2");
      h2.textContent = title;
      h2.setAttribute("tabindex", 0);
      details.appendChild(h2);
    }

    if (video) {
      const videotape = `assets/media/${video}`;
      const photographerVideo = document.createElement("video");
      photographerVideo.setAttribute("src", videotape);
      media.appendChild(photographerVideo);
      photographerVideo.dataset.id = id;
      photographerVideo.setAttribute("aria-label", title + ", closeup view");
      photographerVideo.setAttribute("tabindex", 0);

      const h2 = document.createElement("h2");
      h2.textContent = title;
      h2.setAttribute("tabindex", 0);
      details.appendChild(h2);
    }

    const p = document.createElement("p");
    p.setAttribute("class", "likes");

    const pLikes = document.createElement("p");
    pLikes.innerHTML = likes;
    pLikes.setAttribute("tabindex", 0);

    const pHeart = document.createElement("div");
    pHeart.setAttribute("class", "fas fa-heart");
    pHeart.setAttribute("tabindex", 0);

    media.appendChild(details);
    details.appendChild(p);
    p.appendChild(pLikes);
    p.appendChild(pHeart);
    return media;
  }

  return { photographerId, id, title, image, video, likes, getMediaCardDOM };
}
