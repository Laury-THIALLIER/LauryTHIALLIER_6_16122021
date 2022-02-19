function photographerProfileFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getProfileCardDOM() {
    const infos = document.createElement("div");
    infos.setAttribute("class", "infos");
    const div = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.textContent = name;
    h1.setAttribute("tabindex", "0");

    const description = document.createElement("div");
    description.setAttribute("tabindex", "0");

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
    img.setAttribute("alt", name);
    img.setAttribute("tabindex", "0");

    const totalLikesBar = document.querySelector(".totalLikes-bar");
    const pPrice = document.querySelector(".price");
    pPrice.textContent = price + "€ / jour";
    totalLikesBar.appendChild(pPrice);

    infos.appendChild(div);
    div.appendChild(h1);
    div.appendChild(description);
    description.appendChild(pLocation);
    description.appendChild(pTagline);
    infos.appendChild(button);
    infos.appendChild(img);

    // Contact

    const contact = document.getElementById("contact_me");
    contact.innerHTML = "Contactez-moi<br>" + name;

    return infos;
  }

  return { name, picture, city, country, tagline, price, getProfileCardDOM };
}
