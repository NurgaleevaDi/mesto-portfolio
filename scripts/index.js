const editBtn = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.profile-popup');
const popupCloseButton = document.querySelector('.profile-popup__button');

const addBtn = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.card-popup');
const popupCloseButtonCard = document.querySelector('.profile-popup__button_card');

const popupImage = document.querySelector('.popup-image');
const popupCloseButtonImage = document.querySelector('.popup-image__button');

const nameUser =  document.querySelector('.profile__title');
const specialtyUser = document.querySelector ('.profile__subtitle');
const formElement = document.querySelector('.profile-popup__input');
const nameInput = formElement.querySelector('.profile-popup__input-text_type_name');
const specialtyInput = formElement.querySelector ('.profile-popup__input-text_type_specialty');

function open(popup) {
  popup.classList.add('profile-popup_opened');
}

function close(popup) {
  popup.classList.remove('profile-popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault(); 
    nameUser.textContent = nameInput.value;
    specialtyUser.textContent = specialtyInput.value;
 close(popupEdit);
}

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

// import {initialCards} from './cards.js'; не работает в Google Chrome

const containerEl = document.querySelector('.elements');
const templateEl = document.querySelector('.template');
function render() {
  const cards = initialCards
    .map((item) => {
      return getItem(item);
  });
  containerEl.append(...cards);
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
const newEl = document.querySelector('.profile-popup__input_newEl');
const inputEl = newEl.querySelector('.profile-popup__input-text_type_title');
const imageInput = newEl.querySelector('.profile-popup__input-text_type_image');


function handleAdd(evt) {
  evt.preventDefault();
  
  const inputText = inputEl.value;
  const inputImg = imageInput.value;
  const cardItem = getItem({name: inputText, link: inputImg});
  containerEl.prepend(cardItem);
  close(popupCard);
  inputEl.value = '';
  imageInput.value = '';
}  

function handleDelete(evt) {
  const targetEl = evt.target;
  const cardItem = targetEl.closest('.elements__item');
  cardItem.remove(); 
}
  
function handleLike(evt) {
  const targetEl = evt.target;
  targetEl.classList.toggle('elements__button-like_active');
      //  .classListsetAttribute('disabled', true);
}
      
const popupImg = document.querySelector('.popup-image__image');
const popupTitle = popupImage.querySelector('.popup-image__title');
       
function handleOpenImage (item) {
  popupImg.src = item.link;
  popupImg.alt = item.name;
  popupTitle.textContent = item.name;
  open(popupImage);
}

editBtn.addEventListener ('click', () => {
  open(popupEdit);
  nameInput.value = nameUser.textContent;
  specialtyInput.value = specialtyUser.textContent;
});
popupCloseButton.addEventListener('click', () => {close(popupEdit);});
addBtn.addEventListener('click', () => {open(popupCard);});
popupCloseButtonCard.addEventListener('click', () => {close(popupCard);});
popupCloseButtonImage.addEventListener('click', () => {close(popupImage);});
formElement.addEventListener("submit", formSubmitHandler);
newEl.addEventListener('submit', handleAdd);
render();