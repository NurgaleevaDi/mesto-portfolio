// Section отвечает за отрисовку элементов на странице
// Первым параметром конструктора принимает объект с двумя свойствами: items и renderer 
// Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса
// Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице
// Второй параметр конструктора — селектор контейнера, в который нужно добавлять созданные элементы
class Section {
    constructor({items, renderer}, containerSelector) {
        this._renderedItems = items;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
      }
      
      addItem(element) {
        this._container.append(element);
      }
    
      clear() {
        this._container.innerHTML = '';
      }
    
      renderItems() {
        this.clear();
        this._renderedItems.forEach(item => {
          this._renderer(item);
        });
      }
    }; 
export default Section;