import Popup from "./Popup.js";

class PopupWithImage extends Popup{
    constructor (popupSelector){
      super(popupSelector); // вызываем конструктор родителя
      this._popupImg = this._popupElement.querySelector('.popup-image__image');
      this._popupTitle = this._popupElement.querySelector('.popup-image__title');
    }
openPopup(data){
this._popupImg.src = data.link;
this._popupImg.alt = data.name;
this._popupTitle.textContent = data.name;
super.openPopup();
}

}
export default PopupWithImage;