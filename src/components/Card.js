class Card {
// конструктор принимает данные карточки (имя, ссылку) и template ее элемента
  constructor(selector, data, handleCardClick, handleDeleteCard, likeCardClick, userId){
    this._selector = selector;
    this._name = data.name;
    this._link = data.link;
    this._countLikes = data.likes;
    // console.log(data.likes);
    // console.log(this._countLikes.length);
    // this._userId = userId;
    // console.log(userId);
    this._cardId = data._id;
    // console.log(this._cardId);
    // this._userId = '8c331f0cb9e1ab92df7228f6';
    this._userId = userId;
    this._ownerId = data.owner._id;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._likeCardClick = likeCardClick;
  }
  _getTemplate(){
    return document.querySelector(this._selector)
      .content
      .querySelector('.elements__item')
      .cloneNode(true)
  }

  removeCard = () => {
    this._element.remove();
  }

  getIdCard() {
    return this._cardId;
  }
  

  _handleLikeCard = () => {
    this._element.querySelector('.elements__button-like')
    .classList.toggle('elements__button-like_active');
  }
  generateCard() {
    this._element = this._getTemplate(); 
    this._elementImg = this._element.querySelector('.elements__image');
    this._element.querySelector('.elements__name').textContent = this._name;
    this._elementImg.src = this._link;
    this._elementImg.alt = this._name;
    this._likes = this._element.querySelector('.elements__like-counter');
    this._trashCan = this._element.querySelector('.elements__button-delete');
    this._handleLike = this._element.querySelector('.elements__button-like');
    
    if (this._ownerId !== this._userId) {
        this._trashCan.style.display = 'none';
    }
    
    this.renderLikes(); 
    this._setEventListeners(); 
    return this._element;
  }

  _setEventListeners(){
    this._element.querySelector('.elements__button-delete').addEventListener('click', this._handleDeleteCard);
    this._element.querySelector('.elements__button-like').addEventListener('click', this._handleLikeCard);
    this._elementImg.addEventListener('click', this._handleCardClick);
    this._handleLike.addEventListener('click', ()=>{
      this._likeCardClick(); //class
      // this._handleLikeCard(); //toggle
    })
  }

  renderLikes(){
    // console.log(this._likes);
    // console.log(this._countLikes.length);
    this._likes.textContent = this._countLikes.length;
    this._showLikes(this._userId);
  }


  likedCard() {
    return this._countLikes.some(like =>{
      // console.log(like._id);
      return like._id === this._userId
    })
  }

  setLikes(list) {
    this._countLikes = list
    console.log(this._countLikes);
  }


  
  _showLikes() {
    if (this.likedCard(this._userId)){
      
      this._handleLike.classList.add('elements__button-like_active')
    } else {
      this._handleLike.classList.remove('elements__button-like_active')
    }
  }


}

export default Card;