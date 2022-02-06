// UserInfo отвечает за управление отображением информации о пользователе на странице
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
class UserInfo {
    constructor({ nameSelector, specialtySelector }){
        this._nameElement = document.querySelector(nameSelector);
        this._specialtyElement = document.querySelector(specialtySelector);
    }
// getUserInfo возвращает объект с данными пользователя. 
// ддля того, чтобы подставить в форму при открытии
getUserInfo(){
    return {
    name: this._nameElement.textContent,
    specialty: this._specialtyElement.textContent
    }
}
// setUserInfo принимает новые данные пользователя и добавляет их на страницу.
setUserInfo({ name, specialty }){
    this._nameElement.textContent = name;
    this._specialtyElement.textContent = specialty;
    }
}
export default UserInfo;