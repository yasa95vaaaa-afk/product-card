class Modal {
    constructor(modalId) {
        this.modalId = modalId;
        this.modalElement = document.getElementById(modalId);
        this.overlayElement = document.getElementById('overlay');

        this.listenCloseButton();
    }

    open() {
        if (!this.modalElement) return;
        this.modalElement.classList.add('active');
        if (this.overlayElement) {
            this.overlayElement.classList.add('active');
        }
    }

    close() {
        if (!this.modalElement) return;
        this.modalElement.classList.remove('active');
        if (this.overlayElement) {
            this.overlayElement.classList.remove('active');
        }
    }

    isOpen() {
        return this.modalElement ? this.modalElement.classList.contains('active') : false;
    }

    listenCloseButton() {
        if (!this.modalElement) return;

        const closeBtn = this.modalElement.querySelector('.modal-close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        if (this.overlayElement) {
            this.overlayElement.addEventListener('click', () => {
                if (this.isOpen()) {
                    this.close();
                }
            });
        }
    }
}

export default Modal;