export const popupImage = document.querySelector('.popup-image');
export const popupImg = document.querySelector('.popup-image__image');
export const popupTitle = popupImage.querySelector('.popup-image__title');
export const popupCard = document.querySelector('.card-popup');
export const editBtn = document.querySelector('.profile__edit-button');
export const addBtn = document.querySelector('.profile__add-button');
export const formProfileElement = document.querySelector('.popup__input_profile');
export const nameInput = formProfileElement.querySelector('.popup__input-text_type_name');
export const specialtyInput = formProfileElement.querySelector ('.popup__input-text_type_specialty');
export const newCardFormElement = document.querySelector('.popup__input_newEl');
export const profileAvatarInput = document.querySelector('.popup__input-text_type_avatarUrl');
export const editAvatarButton = document.querySelector('.profile__image-edit');
export const validatorConfig = {
      inputSelector: '.popup__input-text',
      submitButtonSelector: '.popup__input-button',
      inactiveButtonClass: 'popup__input-button_disabled',
      inputErrorClass: 'profile-popup__input-text_error',
      errorClass: 'popup__error_visible'
}