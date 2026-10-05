class Form {
   
    constructor(formId, modalInstance) { 
        this.formElement = document.getElementById(formId);
        this.modal = modalInstance; 
        this.codeCount = 0; 
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
            
            if (this.modal) {
                this.modal.close(); 
            }
        }
    }
}

export default Form;







