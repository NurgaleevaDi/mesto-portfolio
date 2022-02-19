import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import { 
  editBtn, 
  addBtn, 
  formProfileElement,
  nameInput,
  specialtyInput,
  newCardFormElement,
  profileAvatarInput,
  editAvatarButton,
  validatorConfig
 } from "../components/utils.js";
import "./index.css";
let userId;

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-35',
  token: '7b2f9279-45b3-4b51-8e23-d855b4f2907e'
}); 

const addCardValidator = new FormValidator(newCardFormElement, validatorConfig);
addCardValidator.enableValidation();
const editProfileValidator = new FormValidator(formProfileElement, validatorConfig);
editProfileValidator.enableValidation();

const imageViewer = new PopupWithImage('.popup-image'); // экземпляр открытия попапа с большой картинкой
imageViewer.setEventListeners();

const popupWithConfirm = new PopupWithConfirm({
  popupSelector:'.confirm-popup',
  handleFormSubmit: (evt, card) => {
   deleteConfirm (evt, card)
  }
});

popupWithConfirm.setEventListeners();
const deleteConfirm = (evt, newCard) => {
  evt.preventDefault();
  console.log(newCard.getIdCard());
  api.deleteCard(newCard.getIdCard())
  .then(() => {
    newCard.removeCard()
    popupWithConfirm.closePopup()
  })
  .catch((err) => {
    console.log(err);
  });
}

function createCard(item) {
  console.log(userId);
  const card = new Card ('.template', item, () => {
    const {name, link} = item;
    imageViewer.openPopup ({name, link})
  },
  () => {
    popupWithConfirm.openPopup(card);
  },
  () =>{
    const likedCard = card.likedCard();
    const resultApi = likedCard ? api.dislikeCard(card.getIdCard()) : api.likeCard(card.getIdCard());
    resultApi.then(data => {
      card.setLikes(data.likes);
      card.renderLikes();
    })
    .catch((err) =>{
      console.log(err)
    })
  },
  userId);
  return card.generateCard();
}
 
addBtn.addEventListener('click', () => {
  addCard.openPopup();
});

const cardList = new Section ({
  renderer: (item) => {
  const cardElement = createCard(item);
  cardList.addItem(cardElement);
  }
}, '.elements');

const addCard = new PopupWithForm({
  popupSelector: '.card-popup',
  handleFormSubmit: (formData) => {
    addCard.rendererLoading(true)
    api.addCard(formData.name, formData.link)
    .then(card => {
        const cardElement = createCard(card);
        cardList.addItem(cardElement);
        addCard.closePopup(); 
        addCardValidator.toggleButtonError();
    })
    .catch (err => console.log(err))
    .finally(() => {
      addCard.rendererLoading(false);
    });
    }
  });
addCard.setEventListeners();

Promise.all([api.getUserData(), api.getCards()])
.then(([data, items]) => {
  console.log(data);
  userInfo.setUserInfo(data);
  cardList.renderItems(items.reverse());
  userId = data._id;
 
  })
.catch (err => console.log(err));


const userInfo = new UserInfo ({
  nameSelector: '.profile__title',
  specialtySelector: '.profile__subtitle',
  profileAvatar: '.profile__image'
})

editBtn.addEventListener ('click', () => {
  editProfile.openPopup();
  const aboutUser = userInfo.getUserInfo();
  nameInput.value = aboutUser.name;
  specialtyInput.value = aboutUser.specialty 
});
const editProfile = new PopupWithForm({
  popupSelector: '.profile-popup',
  handleFormSubmit:(data) => {
    editProfile.rendererLoading(true);
    console.log(data);
  api.profileEdit(data.name, data.specialty)
  .then(() => {
    console.log(data);
    console.log(userInfo);
    userInfo.setUserInfo(data);
    editProfile.closePopup(); 
  })
  .catch((err) => {console.log(err)})
  .finally(() => {
    editProfile.rendererLoading(false);
  })
  } 
})
editProfile.setEventListeners();

const popupEditAvatar = new PopupWithForm({
  popupSelector: '.avatar-popup',
  handleFormSubmit:() => {
    popupEditAvatar.rendererLoading(true);
    // console.log(`url('${profileAvatarInput.value}')`);
    console.log(`'input'${profileAvatarInput.value}`)
    api.editUserAvatar(profileAvatarInput.value)
    
    .then((res) => {
      // console.log(`'result'${res}`)
      userInfo.setUserInfo(res);
      popupEditAvatar.closePopup();
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      popupEditAvatar.rendererLoading(false);
    })
  }
})
popupEditAvatar.setEventListeners();

editAvatarButton.addEventListener('click', () => {
  popupEditAvatar.openPopup();
})