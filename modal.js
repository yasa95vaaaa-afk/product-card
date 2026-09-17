class Modal {
    constructor(modalId) {                                 
        this.modalId = modalId;                              
        this.modalElement = document.getElementById(modalId); 

        this.listenCloseButton();                             
    }

    
    open() {
        this.modalElement.classList.add('active');           
    }

    
    close() {
        this.modalElement.classList.remove('active');        
    }
    isOpen() {
        return this.modalElement.classList.contains('active'); 
    }
listenCloseButton() {
        const closeBtn = this.modalElement.querySelector('.modal-close'); 
        closeBtn.addEventListener('click', () => {            
            this.close();                                      
        });
    }
}