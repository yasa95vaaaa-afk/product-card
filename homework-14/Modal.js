export class Modal {
  constructor(modalId, buttonId, shouldCloseOnOverlay) {
  this.modalWrapper = document.getElementById(modalId);
    this.modalContent = this.modalWrapper.querySelector('.modal-content'); 

    this.#initOpen(buttonId);
    this.#initClose(shouldCloseOnOverlay);
  }

  open() {
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
    const closeButton = this.modalWrapper.querySelector('.modal-close-button');

    if (closeButton) {
      closeButton.addEventListener('click', () => this.close());
    }

    if (shouldCloseOnOverlay) {
      this.modalWrapper.addEventListener('click', (event) => {
        if (event.target === this.modalWrapper) {
          this.close();
        }
      });
    }
  }
}
