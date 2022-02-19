// UserInfo отвечает за управление отображением информации о пользователе на странице
// Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе
class UserInfo {
    constructor({ nameSelector, specialtySelector, profileAvatar }){
        this._nameElement = document.querySelector(nameSelector);
        this._specialtyElement = document.querySelector(specialtySelector);
        this._profileAvatar = document.querySelector(profileAvatar);
       
    }
// getUserInfo возвращает объект с данными пользователя. 
// ддля того, чтобы подставить в форму при открытии
getUserInfo(){
    return {
    name: this._nameElement.textContent,
    specialty: this._specialtyElement.textContent,
    avatar: this._profileAvatar.style.backgroundImage
    }
    console.log(this._profileAvatar);
}
// setUserInfo принимает новые данные пользователя и добавляет их на страницу.
// setUserInfo({ name, specialty }){
//     this._nameElement.textContent = name;
//     this._specialtyElement.textContent = specialty;
//     }
// }

setUserInfo(data){
    this._nameElement.textContent = data['name'];
    
    this._specialtyElement.textContent = data['about'];
    // console.log(this._profileAvatar);
    // console.log(data['avatar']);
    // this._profileAvatar.style.backgroundImage = data['avatar'];
    this._profileAvatar.src = data['avatar'];
    }
}


export default UserInfo;