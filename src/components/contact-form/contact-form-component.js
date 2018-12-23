import MessageService from 'services/message-service';
import { getFormData, appendComponent } from 'utils/utils';

 /*VALIDACION*/

const addErrorValidationInputs = (formInputs) => {
    for (let i = 0; i < formInputs.length; i += 1) {
        const input = formInputs[i];

        input.addEventListener('focus', () => {
            input.classList.add('focus');
        });

        input.addEventListener('blur', () => {
            input.classList.remove('focus');
        if (!input.checkValidity()) {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
        });
    }
}


export const updateContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    const submitFormButton = document.getElementById('contact-form-submit');
    const formInputs = contactForm.getElementsByClassName('contact-input');
    const notice = document.getElementById('notice');


    addErrorValidationInputs(formInputs);
    submitFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        submitFormButton.disable = true;
        contactForm.reportValidity();
        if(contactForm.checkValidity()){
        const MessageServiceInstance = new MessageService();
        MessageServiceInstance.postMessage(getFormData(formInputs)).then(
            (response) => {
            if(response === true) {
                notice.innerHTML = 'Your message has been sent';
            }
        }
        );
        submitFormButton.disable = false;
        }
    });
};

/*CREAMOS FORM */

export const createArticleForm = ({
    name,
    last_name,
    email,
    message
} = 
{
    name: 'No name',
    last_name: 'No last_name',
    email: 'No email',
    message:'No message'
}) =>{
    const articleForm = document.createElement('div');
    articleForm.classList.add('article-form');
    articleForm.innerHTML = `
    <p>${name}</p>
    <p>${last_name}</p>
    <p>${email}</p>
    <p>${message}</p>
    `

}

export default {
    createArticleForm,
    updateContactForm
}
