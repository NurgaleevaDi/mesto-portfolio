class Api{
    constructor({address, token}){
        this._address = address;
        this._token = token;
    }
    
    _handleResponse = (res) => {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка ${res.status}`)
    }

    getUserData() {
        return fetch(`${this._address}/users/me`,{
            headers: {
                authorization: this._token
            }
        }).then(this._handleResponse)
    }

    getCards() {
        return fetch(`${this._address}/cards`, {
            headers: {
                authorization: this._token
            }
        }).then(this._handleResponse)
    }

    profileEdit(name, about){
        return fetch(`${this._address}/users/me`, {
            method:'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: about
            })
        }).then(this._handleResponse)
    }

    addCard(name, link){
        return fetch(`${this._address}/cards`,{
            method:'POST',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(this._handleResponse)
    }

    deleteCard(cardId) {
        return fetch (`${this._address}/cards/${cardId}`,{
            method:'DELETE',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            }
        }).then(this._handleResponse)
    
    }

    likeCard(cardId) { 
        return fetch (`${this._address}/cards/likes/${cardId}`,{
        method:'PUT',
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
        }
    }).then(this._handleResponse)
    }
    dislikeCard(cardId) { 
        return fetch (`${this._address}/cards/likes/${cardId}`,{
        method:'DELETE',
        headers: {
            authorization: this._token,
            'Content-Type': 'application/json'
        }
    }).then(this._handleResponse)
    }

    editUserAvatar(url){
        return fetch(`${this._address}/users/me/avatar`,{
            method:'PATCH',
            headers: {
                authorization: this._token,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: url
            })
        }).then(this._handleResponse)
    }

}
export default Api;