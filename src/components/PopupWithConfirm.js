import Popup from "./Popup.js";

class PopupWithConfirm extends Popup{
    constructor( {popupSelector, handleFormSubmit} ){
        super(popupSelector); 
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
      }
      setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
          this._handleFormSubmit(evt, this._card); 
        });
    } 
     openPopup(card){
       super.openPopup()
       this._card = card;
      }
}

export default PopupWithConfirm;