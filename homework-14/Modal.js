export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
    // 1. Находим саму модалку (теперь она сама является оверлеем/оболочкой)
    this.modalWrapper = document.getElementById(modalId);
    
    // Переменная для контентной (внутренней) части, чтобы клик по ней не закрывал окно
    this.modalContent = this.modalWrapper.querySelector('.modal-content'); 

    this.#initOpen(buttonId);
    this.#initClose(shouldCloseOnOverlay);
  }

  open() {
    // Показываем всю оболочку сразу (она и фон, и контейнер)
    this.modalWrapper.classList.add('modal-showed');
  }

  close() {
    this.modalWrapper.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modalWrapper.classList.contains('modal-showed');
  }

  #initOpen(buttonId) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => this.open());
    }
  }

  #initClose(shouldCloseOnOverlay) {
    // Ищем кнопку закрытия по классу внутри ТЕКУЩЕЙ модалки, а не по глобальному ID!
    const closeButton = this.modalWrapper.querySelector('.modal-close-button');

    if (closeButton) {
      closeButton.addEventListener('click', () => this.close());
    }

    // РЕШЕНИЕ ПРОБЛЕМЫ ОВЕРЛЕЯ:
    // Слушаем клик на ВСЮ обертку. Если кликнули на темный фон, а не на само белое окно — закрываем.
    if (shouldCloseOnOverlay) {
      this.modalWrapper.addEventListener('click', (event) => {
        // Проверяем, что кликнули именно на фон (wrapper), а не на контент внутри него
        if (event.target === this.modalWrapper) {
          this.close();
        }
      });
    }
  }
}