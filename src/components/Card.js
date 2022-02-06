import { popupImg, popupTitle, popupImage, popupCard } from "./utils.js";

class Card {
// конструктор принимает данные карточки (имя, ссылку) и template ее элемента
  constructor(selector, data, handleCardClick){
    this._selector = selector;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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
    const elementImg = this._element.querySelector('.elements__image');
    this._element.querySelector('.elements__name').textContent = this._name;
    elementImg.src = this._link;
    elementImg.alt = this._name;
    this._element.querySelector('.elements__button-delete').addEventListener('click', this._handleDeleteCard);
    this._element.querySelector('.elements__button-like').addEventListener('click', this._handleLikeCard);
    elementImg.addEventListener('click', this._handleCardClick);
    
    return this._element;
  }
 
}

export default Card;