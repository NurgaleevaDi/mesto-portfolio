export const popupImage = document.querySelector('.popup-image');
export const popupImg = document.querySelector('.popup-image__image');
export const popupTitle = popupImage.querySelector('.popup-image__title');
export const popupCard = document.querySelector('.card-popup');

// export function openPopup(popup) {
//     popup.classList.add('popup_opened');
//     document.addEventListener('keydown', closeByEscape); 
//   }
  
// export function closeByEscape(evt) {
//     if (evt.key === 'Escape'){
//       const openedPopup = document.querySelector('.popup_opened')
//       closePopup(openedPopup);
//         }
//   }

// export function closePopup(popup) {
//   popup.classList.remove('popup_opened');
//   document.removeEventListener('keydown', closeByEscape); 
// }