function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("contact_close").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    closeModal();
  }
});

const inputs = document.querySelectorAll(".contact_input");
const contact_modal = document.getElementById("contact_modal");

let firstname;
let lastname;
let email;
let message;

inputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    if (input.name == "firstname")
      firstname = document.getElementById("firstname").value;
    if (input.name == "lastname")
      lastname = document.getElementById("lastname").value;
    if (input.name == "email") email = document.getElementById("email").value;
    if (input.name == "message")
      message = document.getElementById("message").value;
  });
});

contact_modal.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Prénom : " + firstname);
  console.log("Nom : " + lastname);
  console.log("Email : " + email);
  console.log("Message : " + message);

  inputs.forEach((input) => {
    input.value = "";
  });

  closeModal();
});
