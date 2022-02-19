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
          // вызов функции _handleFormSubmit, передадим ей объект — результат работы _getInputValues
          this._handleFormSubmit(evt, this._card); 
        });
    } 
     openPopup(card){
       super.openPopup()
       this._card = card;
      }
    // setEventListeners() {
    //     super.setEventListeners();
    //     this._popupElement.addEventListener('submit', (evt) => {
    //       evt.preventDefault();
    //       // вызов функции _handleFormSubmit, передадим ей объект — результат работы _getInputValues
    //       this._handleFormSubmit(this._getInputValues()); 
    //     });
    // } 
    // при закрытии попапа форма должна ещё и сбрасываться.
    // closePopup() {
    //     super.closePopup();
    //     this._form.reset(); 
    // }
}

export default PopupWithConfirm;