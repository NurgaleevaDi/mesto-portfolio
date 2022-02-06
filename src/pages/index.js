import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import "./index.css";
// import { openPopup, closePopup } from "./utils.js";
// import { popupImage } from "./utils.js";

// const popupEdit = document.querySelector('.profile-popup');
// const popupCard = document.querySelector('.card-popup');
// const nameUser =  document.querySelector('.profile__title');
// const specialtyUser = document.querySelector ('.profile__subtitle');
// const cardListSelector = ('.elements');
// const popupInputBtnCard = document.querySelector('.popup__input-button_card');
// const inputEl = newCardFormElement.querySelector('.popup__input-text_type_title');
// const imageInput = newCardFormElement.querySelector('.popup__input-text_type_image');
// const containerEl = document.querySelector('.elements');


const editBtn = document.querySelector('.profile__edit-button');
const addBtn = document.querySelector('.profile__add-button');
const formElement = document.querySelector('.popup__input');
const nameInput = formElement.querySelector('.popup__input-text_type_name');
const specialtyInput = formElement.querySelector ('.popup__input-text_type_specialty');
const newCardFormElement = document.querySelector('.popup__input_newEl');
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

const validatorConfig = {
      inputSelector: '.popup__input-text',
      submitButtonSelector: '.popup__input-button',
      inactiveButtonClass: 'popup__input-button_disabled',
      inputErrorClass: 'profile-popup__input-text_error',
      errorClass: 'popup__error_visible'
}
  
const editPopup = new Popup ('.profile-popup'); // экземпляр попапа для редактирования профиля
const addPopup = new Popup ('.card-popup'); // экземпляр попапа для добавления новой карточки 

const addCardValidator = new FormValidator(newCardFormElement, validatorConfig);
addCardValidator.enableValidation();
const editProfileValidator = new FormValidator(formElement, validatorConfig);
editProfileValidator.enableValidation();

const imageViewer = new PopupWithImage('.popup-image'); // экземпляр открытия попапа с большой картинкой
imageViewer.setEventListeners();

// секция с картинками
const cardList = new Section ({items: initialCards, renderer: (item) => {
  const card = new Card('.template', item, () => {
    const {name, link} = item;
    imageViewer.openPopup({name, link})});
  
  const cardElement = card.generateCard();
  cardList.addItem(cardElement);
  }

}, '.elements');
cardList.renderItems();
 

addBtn.addEventListener('click', () => {
  addPopup.openPopup();
});

const addCard = new PopupWithForm({
  popupSelector: '.card-popup',
  handleFormSubmit: (formData) => {
    const card = new Card('.template', formData, () => {
      const {name, link} = formData;
      imageViewer.openPopup({name, link})
    }); 
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);
    addCard.closePopup();
    }
   
  });
addCard.setEventListeners();

const userInfo = new UserInfo ({
  nameSelector: '.profile__title',
  specialtySelector: '.profile__subtitle'
})

editBtn.addEventListener ('click', () => {
  editPopup.openPopup();
  const aboutUser = userInfo.getUserInfo();
  nameInput.value = aboutUser.name;
  specialtyInput.value = aboutUser.specialty 
});

const editProfile = new PopupWithForm ({
  popupSelector: '.profile-popup',
  handleFormSubmit: ({ name, specialty }) => {
  userInfo.setUserInfo ({ name, specialty });
  editProfile.closePopup(); 
  } 
    
})
editProfile.setEventListeners();
