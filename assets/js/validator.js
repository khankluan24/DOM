// Đối tượng Validator
function Validator(options) {
    
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    const selectorRules = {};
    // Ham thuc hien validate - Cac input deu lap vao func nay
    function validate(inputElement, rule) {

        // var errorElement = getParent(inputElement, '.form-group')
        const errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
        
        // Hiển thị message
        var errorMessage;
        
        // Lay ra cac rules cua selector
        const rules = selectorRules[rule.selector];

        // Lap qua tung rules va kiem tra
        // Neu co loi thi dung
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case'checkbox':
                case'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);

            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement,options.formGroupSelector).classList.add('invalid');
        }
        else {
            errorElement.innerText = '';
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }
    // Lay element cua form can validate
    const formElement = document.querySelector(options.form);

    if (formElement) {
        formElement.onsubmit = (event) => {
            event.preventDefault();
            var isFormValid =true;

            // Lap qua tung rule va validate
            options.rules.forEach((rule) => {
                const inputElement = formElement.querySelector(rule.selector);
                // validate(inputElement, rule);
                var isValid =  validate(inputElement, rule);  
                if(!isValid) {
                    isFormValid = false;
            }
            });

            if (isFormValid) {
                //Truong hop submit voi js
                if (typeof options.onSubmit === 'function') {
                    const enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
                    const formValues = Array.from(enableInputs).reduce((prev,next) => {
                        
                        switch(next.type) {
                            case 'radio':
                                prev[next.name] = formElement.querySelector(`input[name="${next.name}"]:checked`).value;
                                break;
                            case 'checkbox':
                                if (!next.matches(':checked')) {
                                    prev[next.name] = '';
                                    return prev
                                }
                                if(!Array.isArray(prev[next.name]) ) {
                                    prev[next.name] = [];
                                }
                                prev[next.name].push(next.value);
                                break;
                            case 'file':
                                prev[next.name] = next.files;
                                break;
                            default:
                                prev[next.name] = next.value;
                        }
                        return prev;
                    }, {});
                    options.onSubmit(formValues);
                }
            }
            // Truong hop submit voi hanh vi mac dinh
            // else {
            //     // Submit voi hanh vi mac dinh
            //     formElement.submit();
            // }
        }

        // Xu ly lap qua moi rule (lang nghe su kien)
        options.rules.forEach((rule) => {
            // Luu lai cac rule moi input
            if (Array.isArray(selectorRules[rule.selector] = rule.test)) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            const inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach((inputElement) => {
                // Xu ly truong hop blur khoi input
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                }

                // Xu ly  khi user nhap vao input
                inputElement.oninput = () => {
                    const errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement,options.formGroupSelector).classList.remove('invalid');
                }
            })
            
        });
    }
}
// Định nghĩa rules
/**     Nguyen tac cac rules:
 1. Khi co loi => message loi
 2. Khi hop le => Ko return cai gi (undefined)
 */
Validator.isRequired = (selector,message) => {
    return {
        selector: selector,
        test: function (value) {
            return value ? undefined : message || 'Vui lòng điền vào trường này'
        }
    };
}

Validator.isEmail = (selector,message) => {
    return {
        selector: selector,
        test: function (value) {
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập lại email'
        }
    };
}

Validator.minLength = (selector, min,message) => {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message ||` Vui lòng nhập tối thiểu ${min} ký tự`
        }
    }
}

Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không đúng'
        }
    }
}
