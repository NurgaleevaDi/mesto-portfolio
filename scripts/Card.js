import { openPopup, popupImg, popupTitle, popupImage } from "./utils.js";

class Card {
// конструктор принимает данные карточки (имя, ссылку) и template ее элемента
  constructor(selector, data){
    this._selector = selector;
    // console.log(this._selector);
    this._name = data.name;
    // console.log(this._name)
    this._link = data.link;
  }
  _getTemplate(){
    return document.querySelector(this._selector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true)
  }

  _handleDeleteCard = () => {
    this._element.remove();
  }

  _handleLikeCard = () => {
    this._element.querySelector('.elements__button-like')
    .classList.toggle('elements__button-like_active');
  }
  generateCard() {
    this._element = this._getTemplate(); 
    this._element.querySelector('.elements__name').textContent = this._name;
    this._element.querySelector('.elements__image').src = this._link;
    this._element.querySelector('.elements__button-delete').addEventListener('click', this._handleDeleteCard);
    this._element.querySelector('.elements__button-like').addEventListener('click', this._handleLikeCard);
    this._element.querySelector('.elements__image').addEventListener('click', this._handleOpenImage);
    
    return this._element;
  }

  _handleOpenImage = () => {  
    popupImg.src = this._link;
    popupImg.alt = this._name;
    popupTitle.textContent = this._name;
    openPopup(popupImage);
  }

}

export default Card;