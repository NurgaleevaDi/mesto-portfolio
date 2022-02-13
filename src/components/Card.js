class Card {
// конструктор принимает данные карточки (имя, ссылку) и template ее элемента
  constructor(selector, data, handleCardClick, handleDeleteCard){
    this._selector = selector;
    this._name = data.name;
    this._link = data.link;
    this._countLikes = data.likes;
    console.log(this._countLikes.length);
    // this._userId = userId;
    // console.log(userId);
    this._cardId = data._id;
    console.log(this._cardId);
    this._userId = '8c331f0cb9e1ab92df7228f6';
    this._ownerId = data.owner._id;
    
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;

  }
  _getTemplate(){
    return document.querySelector(this._selector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true)
  }

  _deleteCard = () => {
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
    this._likes = this._element.querySelector('.elements__like-counter');
    this._trashCan = this._element.querySelector('.elements__button-delete');
    if (this._ownerId !== this._userId) {
        this._trashCan.style.display = 'none';
    }
       
    
    this._element.querySelector('.elements__button-delete').addEventListener('click', this._handleDeleteCard);
    this._element.querySelector('.elements__button-like').addEventListener('click', this._handleLikeCard);
    elementImg.addEventListener('click', this._handleCardClick);
    
    this.renderLikes();
       
    return this._element;
  }


  renderLikes(){
    console.log(this._likes);
    console.log(this._countLikes.length);
    this._likes.textContent = this._countLikes.length;


   
  }
}

export default Card;