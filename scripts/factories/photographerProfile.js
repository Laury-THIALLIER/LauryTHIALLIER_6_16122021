function photographerProfileFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getProfileCardDOM() {
    infos = document.createElement("div");
    infos.setAttribute("class", "infos");
    div = document.createElement("div");

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const pLocation = document.createElement("p");
    pLocation.textContent = city + ", " + country;

    const pTagline = document.createElement("p");
    pTagline.textContent = tagline;

    const button = document.createElement("button");
    button.textContent = "Contactez-moi";
    button.setAttribute("class", "contact_button");
    button.setAttribute("onclick", "displayModal()");

    const img = document.createElement("img");
    img.setAttribute("src", picture);

    totalLikesBar = document.querySelector(".totalLikes-bar");
    const pPrice = document.querySelector(".price");
    pPrice.textContent = price + "€ / jour";
    totalLikesBar.appendChild(pPrice);

    infos.appendChild(div);
    div.appendChild(h2);
    div.appendChild(pLocation);
    div.appendChild(pTagline);
    infos.appendChild(button);
    infos.appendChild(img);

    // Contact

    const contact = document.getElementById("contact_me");
    contact.innerHTML = "Contactez-moi<br>" + name;

    return infos;
  }

  return { name, picture, city, country, tagline, price, getProfileCardDOM };
}
