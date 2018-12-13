
export const updateContactForm = () => {

    const contactForm = document.getElementById('contact-form');
    const submitFormButton = document.getElementById('contact-form-submit');

    const formInputs = contactForm.getElementsByClassName('contact-input');
    for(let i = 0; i < formInputs.length; i += 1){
        const input = formInputs[i];
        input.addEventListener('blur', () => {
            if(!input.checkValidity()){
                input.classList.add('error');
            }else{
                input.classList.remove('error');
            }
        });
    }

    submitFormButton.addEventListener('click', () => {
    });
};

export default updateContactForm;