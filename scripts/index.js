import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import { openPopup, closePopup } from "./utils.js";

const editBtn = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.profile-popup');
const addBtn = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.card-popup');
const popupImage = document.querySelector('.popup-image');
const nameUser =  document.querySelector('.profile__title');
const specialtyUser = document.querySelector ('.profile__subtitle');
const formElement = document.querySelector('.popup__input');
const nameInput = formElement.querySelector('.popup__input-text_type_name');
const specialtyInput = formElement.querySelector ('.popup__input-text_type_specialty');
const popupInputBtnCard = document.querySelector('.popup__input-button_card');
const containerEl = document.querySelector('.elements');
const templateEl = document.querySelector('.template');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function handleFormSubmit (evt) {
  evt.preventDefault(); 
    nameUser.textContent = nameInput.value;
    specialtyUser.textContent = specialtyInput.value;
  closePopup(popupEdit);
}

function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);
  const imgEl = newItem.querySelector('.elements__image');
  const headerEl = newItem.querySelector('.elements__name');
  headerEl.textContent = item.name;
  imgEl.src = item.link;
  imgEl.alt = item.name;
  
  const removeBtn = newItem.querySelector('.elements__button-delete');
  removeBtn.addEventListener('click', handleDelete);

  const likeBtn = newItem.querySelector('.elements__button-like');
  likeBtn.addEventListener('click', handleLike);

  const imageCard = newItem.querySelector('.elements__image');
  imageCard.addEventListener('click', () => handleOpenImage(item));
  
  return newItem;
  
}       
const newEl = document.querySelector('.popup__input_newEl');
const inputEl = newEl.querySelector('.popup__input-text_type_title');
const imageInput = newEl.querySelector('.popup__input-text_type_image');

function handleAdd(evt) {
  evt.preventDefault();
  const inputText = inputEl.value;
  const inputImg = imageInput.value;
  const cardItem = getItem({name: inputText, link: inputImg});
  containerEl.prepend(cardItem);
  closePopup(popupCard);
  inputEl.value = '';
  imageInput.value = '';
  popupInputBtnCard.setAttribute('disabled', true);
  popupInputBtnCard.classList.add('popup__input-button_disabled');
}  

function handleDelete(evt) {
  const targetEl = evt.target;
  const cardItem = targetEl.closest('.elements__item');
  cardItem.remove(); 
}
  
function handleLike(evt) {
  const targetEl = evt.target;
  targetEl.classList.toggle('elements__button-like_active');
}
      
const popupImg = document.querySelector('.popup-image__image');
const popupTitle = popupImage.querySelector('.popup-image__title');
       
function handleOpenImage (item) {
  popupImg.src = item.link;
  popupImg.alt = item.name;
  popupTitle.textContent = item.name;
  openPopup(popupImage);
}

editBtn.addEventListener ('click', () => {
  openPopup(popupEdit);
  nameInput.value = nameUser.textContent;
  specialtyInput.value = specialtyUser.textContent;
});

const popups = document.querySelectorAll('.popup');
popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_opened')){
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__close')){
      closePopup(popup)
    }
  })
})

addBtn.addEventListener('click', () => {openPopup(popupCard);});
formElement.addEventListener('submit', handleFormSubmit);
newEl.addEventListener('submit', handleAdd);

initialCards.forEach((item) => {
  const card = new Card('.template', item);
  const cardElement = card.generateCard();
  containerEl.append(cardElement);
});   

const enableValidation = ({formSelector, ...rest}) => {
  const forms = document.querySelectorAll(formSelector);
  forms.forEach((form) => {
    const validityForm = new FormValidator (form, rest);
    validityForm.enableValidation();
  })
  }
  enableValidation({
    formSelector: '.popup__input',
    inputSelector: '.popup__input-text',
    submitButtonSelector: '.popup__input-button',
    inactiveButtonClass: 'popup__input-button_disabled',
    inputErrorClass: 'profile-popup__input-text_error',
    errorClass: 'popup__error_visible'
  }); 