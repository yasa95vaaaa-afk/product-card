class Form {
    constructor(formId, onSuccessSubmit) { 
        this.formElement = document.getElementById(formId);
        this.codeCount = 0; 
        
        this.onSuccessSubmit = onSuccessSubmit;

        
        this.listEvents();
    }

    listEvents() {
        if (!this.formElement) return;

        this.formElement.addEventListener('submit', (event) => {
            event.preventDefault(); 

            if (this.isValid()) {
                const data = this.getValues();
                
   
                if (typeof this.onSuccessSubmit === 'function') {
                    this.onSuccessSubmit(data);
                }
                
                this.reset();
            } else {
                console.warn('Форма заполнена неверно');
            }
        });
    }
    
    getValues() {
        if (!this.formElement) return {};
        const formData = new FormData(this.formElement);
        const values = {};
        formData.forEach((value, key) => {
            values[key] = value;
        });
        return values;
    }

    isValid() {
        if (!this.formElement) return false;
        return this.formElement.checkValidity();
    }

    reset() {
        if (this.formElement) {
            this.formElement.reset();
            this.codeCount = 0; 
        }
    }
}

export default Form;







