//Declarations
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

//Modals
const addCard = document.querySelector(".popup_type_add-card");
const editProfile = document.querySelector(".popup_type_edit-profile");
const form = document.querySelector(".popup__form");
const inputName = document.querySelector(".popup__form-input_type_name");
const inputJob = document.querySelector(".popup__form-input_type_job");

//Buttons and Other DOM Elements
const openEditProfileButton = document.querySelector(".profile__edit-button");
const closeEditProfileButton = document.querySelector(".popup_close_profile");
const openAddCardButton = document.querySelector(".profile__add-button");
const closeAddCardButton = document.querySelector(".popup_close_add-card");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__subtitle");

//Wrappers
const cardsGallery = document.querySelector(".cards__gallery");

//Functions
function createCardElement(card) {
  const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
  const cardElement = cardTemplate.cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.style.backgroundImage = `url(${card.link})`;
  cardTitle.textContent = card.name;

  return cardElement;
}

function renderCard(card, wrapper) {
  wrapper.append(createCardElement(card));
}

function openEditProfilePopup() {
  editProfile.classList.add("popup_open");

  const profileNameText = profileName.textContent;
  const profileJobText = profileJob.textContent;

  inputName.value = profileNameText;
  inputJob.value = profileJobText;
}

function onSubmit(event) {
  event.preventDefault();

  const inputNameValue = inputName.value;
  const inputJobValue = inputJob.value;

  profileName.textContent = inputNameValue;
  profileJob.textContent = inputJobValue;

  closeEditProfilePopup();
}

function closeEditProfilePopup() {
  editProfile.classList.remove("popup_open");
}

function openAddCardModal() {
  addCard.classList.add("popup_open");
}

function onSubmit(event) {
  closeAddCardPopup();
}

function closeAddCardPopup() {
  addCard.classList.remove("popup_open");
}

//Event Handlers
openEditProfileButton.addEventListener("click", openEditProfilePopup);
openAddCardButton.addEventListener("click", openAddCardModal);
closeAddCardButton.addEventListener("click", closeAddCardPopup);
form.addEventListener("submit", onSubmit);
closeEditProfileButton.addEventListener("click", closeEditProfilePopup);
initialCards.forEach((card) => renderCard(card, cardsGallery));
