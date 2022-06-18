class Card {
  constructor({ name, link }, templateCardSelector) {
    this._name = name;
    this._link = link;
    this._templateCardSelector = templateCardSelector;

    this._cardTemplate = document
      .querySelector(templateCardSelector)
      .content.querySelector(".card");
  }

  //Private Method for Adding Event Listeners

  _setEventListeners() {
    likeCardButton.addEventListener("click", this._handleLikeIcon);
    deleteCardButton.addEventListener("click", this._handleDeleteCard);
    cardImage.addEventListener("click", () => this._handlePreviewImage(data));
  }

  //Private Methods for Each One of the Handlers

  _handleLikeIcon = (evt) =>
    evt.target.classList.toggle("card__like-button_active");

  _handleDeleteCard = () => this._cardElement.remove();

  _handlePreviewImage = () => {
    openPopup(addPreviewPopup);
    popupPreviewImage.src = this._link;
    popupPreviewImage.alt = `Photo of ${this._name}`;
    popupPreviewCaption.textContent = this._name;
  };

  getCardElement = () => {
    this._cardElement = this._cardTemplate.cloneNode(true);

    const cardTitle = this._cardElement.querySelector(".card__title");
    const cardImage = this._cardElement.querySelector(".card__image");
    const deleteCardButton = this._cardElement.querySelector(
      ".card__delete-button"
    );
    const likeCardButton =
      this._cardElement.querySelector(".card__like-button");

    cardTitle.textContent = this._name;
    cardImage.style.backgroundImage = `url(${this._link})`;

    return cardElement;
  };
}