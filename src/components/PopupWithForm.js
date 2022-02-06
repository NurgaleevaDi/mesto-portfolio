import Popup from "./Popup.js";

class PopupWithForm extends Popup{
    constructor({ popupSelector, handleFormSubmit }){
        super(popupSelector); // вызываем конструктор родителя
        this._popupSelector = popupSelector;
        this._handleFormSubmit = handleFormSubmit;
        this._form = document.querySelector('.popup__input_newEl');
      }
    //приватный метод _getInputValues собирает данные всех полей формы
    _getInputValues() {
        // достаём все элементы полей
        this._inputList = this._popupElement.querySelectorAll('.popup__input-text');
        // создаём пустой объект
        this._formValues = {};
        // добавляем в этот объект значения всех полей
        this._inputList.forEach(input => {
          this._formValues[input.name] = input.value;
        });
        // возвращаем объект значений
        return this._formValues; 
      } 
    //Перезаписывает родительский метод setEventListeners: должен не только добавлять обработчик клика иконке закрытия, 
    //но и добавлять обработчик сабмита формы.  
    setEventListeners() {
        super.setEventListeners();
        this._popupElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
          // вызов функции _handleFormSubmit, передадим ей объект — результат работы _getInputValues
          this._handleFormSubmit(this._getInputValues()); 
        });
    } 
    // при закрытии попапа форма должна ещё и сбрасываться.
    closePopup() {
        super.closePopup();
        this._form.reset(); 
    }
}

export default PopupWithForm;