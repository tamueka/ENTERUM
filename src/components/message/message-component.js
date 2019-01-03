import './message-styles.scss';

export const createMessage = ({
    name,
    last_name,
    email,
    message
} = {
    name: 'No name',
    last_name: 'No last_name',
    email: 'No email',
    message: 'No message'
}) => {
    const messages = document.createElement('div');
    messages.classList.add('card-message');
    messages.innerHTML = `
        <div>
          <h3>${name} says:</h3> 
          <h5>${message}</h5> 
        </div>`;
    return messages;
};

export default {
    createMessage
};
