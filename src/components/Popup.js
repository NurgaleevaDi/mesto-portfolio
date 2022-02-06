// Popup отвечает за открытие и закрытие попапа
class Popup {
    constructor(popupSelector){
        this._popupElement = document.querySelector(popupSelector);
        this._closeByEscape = this._closeByEscape.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    
    openPopup() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener('keydown', this._closeByEscape); 
      }
      
    closePopup() {
      this._popupElement.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._closeByEscape); 
    }

    _closeByEscape(evt) {
      if (evt.key === 'Escape'){
         this.closePopup();
      }
    }
    
    setEventListeners(){
      this._popupElement.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')){
          this.closePopup(); 
        }
        if (evt.target.classList.contains('popup__close')){
          this.closePopup();  
        }
      })
    }
}

export default Popup;