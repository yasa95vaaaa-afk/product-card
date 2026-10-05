class Modal {
    constructor(modalId) {
        this.modalId = modalId;
        this.modalElement = document.getElementById(modalId);
        this.overlayElement = document.getElementById('overlay');

        this.listenCloseButton();
    }

    open() {
        this.modalElement.classList.add('active');
        this.overlayElement.classList.add('active');
    }

    close() {
        this.modalElement.classList.remove('active');
        this.overlayElement.classList.remove('active');
    }

    isOpen() {
        return this.modalElement.classList.contains('active');
    }

    listenCloseButton() {
        const closeBtn = this.modalElement.querySelector('.modal-close');
        
        // Закрытие по клику на крестик
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.close();
            });
        }

        // Закрытие по клику на оверлей (затемненный фон)
        if (this.overlayElement) {
            this.overlayElement.addEventListener('click', () => {
                this.close();
            });
        }
    }
}



