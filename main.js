const body = document.querySelector("body");
const text_ = prompt("");
const information_ = prompt("");
const email_ = prompt("");

function createCard() {
    const card = document.createElement("div");
    const text = document.createElement("h1");
    const information = document.createElement("p");
    const email = document.createElement("p");
    const image = document.createElement("img")

    information.style.fontStyle = "italic";
    card.classList.add("card")
    image.classList.add("image")

    text.innerHTML = text_;
    information.innerHTML = information_;
    email.innerHTML = email_;
    image.src = "Losha.jpg"

    card.append(image, text, information, email);
    body.appendChild(card);
}

for (let i = 0; i < 36; i++) {
    createCard()
}

function changeWindow(window_){
    window.location.href = window_;
}