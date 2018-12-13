
export const updateContactForm = () => {

    const contactForm = document.getElementById('contact-form');
    const submitFormButton = document.getElementById('contact-form-submit');
    submitFormButton.addEventListener('click', () => {
        console.log(contactForm.checkValidity())
    });
};

export default updateContactForm;