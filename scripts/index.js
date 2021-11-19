const profile = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".profile-popup");
const popupCloseButton = document.querySelector(".profile-popup__button");
let nameUser =  document.querySelector(".profile__title");
let specialtyUser = document.querySelector (".profile__subtitle");
let formElement = document.querySelector(".profile-popup__input");
let nameInput = formElement.querySelector(".profile-popup__input-text_type_name");
let specialtyInput = formElement.querySelector (".profile-popup__input-text_type_specialty");
function open() {
   popup.classList.add("profile-popup_opened");
       nameInput.value = nameUser.textContent;
       specialtyInput.value = specialtyUser.textContent;
 }
function close() {
    popup.classList.remove("profile-popup_opened");
}
function formSubmitHandler (evt) {
evt.preventDefault(); 
    nameUser.textContent = nameInput.value;
    specialtyUser.textContent = specialtyInput.value;
 close();
}
profile.addEventListener ('click', open);
popupCloseButton.addEventListener('click', close);
formElement.addEventListener("submit", formSubmitHandler);