console.log('loaded')

const profile = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".profile-popup");
const popupCloseButton = document.querySelector(".profile-popup__button");

function open() {
   popup.classList.add("profile-popup_opened");
 }


profile.addEventListener ('click', open);


function close() {
    popup.classList.remove("profile-popup_opened");
}
popupCloseButton.addEventListener('click', close);


let formElement = document.querySelector(".profile-popup__input");
let nameInput = formElement.querySelector(".profile-popup__input-name");
let specialtyInput = formElement.querySelector (".profile-popup__input-specialty");

nameInput.value = document.querySelector(".profile__title").textContent;
specialtyInput.value = document.querySelector(".profile__subtitle").textContent;

let nameUser =  document.querySelector(".profile__title");
let specialtyUser = document.querySelector (".profile__subtitle");

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
     nameUser.textContent = nameInput.value;
     specialtyUser.textContent = specialtyInput.value;
     close();
}

formElement.addEventListener("submit", formSubmitHandler);