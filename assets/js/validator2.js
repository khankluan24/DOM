Validator = (formSelector) => {
    var formRules = {};
    const formElement = document.querySelector(formSelector);

    /**
     * Quy uoc tao rules:
     * - Neu co loi thi return `error message`
     * - Neu ko co loi thi return undefined
     */
    const validatorRules = {
        required: function(value) {
            return value ? undefined: 'Vui long dien vao truong nay'
        },
        email: function(value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined: 'Vui long nhap dung email'
        },
        min: function(min) {
            return (value) => value.length >= min ? undefined: `Vui long nhap du ${min} ki tu`
        }
    }
    const nameRule = 'required';
    
    // CHi xu ly khi co element trong DOM
    if (formElement) { 
        const inputs = formElement.querySelectorAll('[name][rules]');
         inputs.forEach(input => {
             const rules = input.getAttribute('rules').split('|');
             rules.forEach((rule, index) => {

                 // Loai bo : giua rules = min: 6
                 if(rule.includes(':')) {
                     const ruleOrigin = rule.split(':');
                     rule = ruleOrigin[0];
                     console.log(validatorRules[rule](ruleOrigin[1]))
                 }

                 if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(validatorRules[rule])
                 }
                 else {
                     formRules[input.name] = [validatorRules[rule]];
                 }

             })
            
             
        });

    }
    console.log(formRules);
}