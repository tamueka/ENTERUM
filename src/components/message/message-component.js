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
      <div class="card text-center">
        <div class="card-body" >
          <h5 class="card-title">${name}</h5> 
          <p class="card-text">${message}</p> 
          <p class="card-text"><small class="text-muted">${email}</small></p>
        </div> 
    </div>`;
    return messages;
};

export default {
    createMessage
};
