import { getFormData, appendComponent, reportValidity } from 'utils/utils';
import { createMessage } from 'components/message/message-component';
import MessageService from 'services/message-service';

const isLiked = id => localStorage.getItem(`article-${id}`);

const toggleLike = (id) => {
    const likeValue = isLiked(id) === 'true' ? 'false': 'true';
    localStorage.setItem(`article-${id}`, likeValue)
}

const setInitialValue = (likeButton, liked) =>{
    if(liked === 'true') likeButton.children[0].classList.add('fas')
}


export const updateArticleDetail = ({
    title,
    imageUrl,
    imageUrl1,
    text,
    author,
    nameArticle,
    imageProfile,
    publicationTime,
    commentsNumber,
    id
} = {
    title: 'No title',
    imageUrl: 'No image',
    text: 'No text',
    author: 'No author',
    nameArticle: 'No name',
    imageProfile: 'No image',
    publicationTime: 'No publication',
    commentsNumber: 'No comments',
}) => {
    const article = document.getElementById('article-detail');
    article.innerHTML = `
    <div>
        <div class="img">
            <img src="${imageUrl}" class="imagen" alt="imagen" title="imagen">
        </div>
        <p class="mb-1">${author}</p>
        <img src="${imageProfile}" alt="Url image" class="d-block" style="height:80px; width=50px; border-radius:50%; padding-bottom: 10px;">
        <div>
            <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style="line-height: 1.25;">${nameArticle}</h1>
            <div>
                <button id="like-button" class="like-button" alt ="like">
                    <i class = "far fa-heart"></i></button>
            </div>
            <p class="mb-1">${text}</p>
        </div>
        <p class="article-title text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link"></p>
        <a title="back" class=" back article-title text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link" href="javascript:history.back()">

        <div>
            <i class="fas fa-long-arrow-alt-left"></i>  BACK</a>
        </div>
    </div>
  `;
  
    const likeButton = document.getElementById('like-button');
    setInitialValue(likeButton, isLiked(id));
    likeButton.addEventListener('click', () => {
    likeButton.children[0].classList.toggle('fas');
    toggleLike(id);
  });
};

export const updateMesageDetail = (data) => {
    const messages = document.getElementById('message-detail');
    const messageArticles = messages;
    if (data.length === 0) {
    } else {
        appendComponent(messageArticles,
            data.map(messageData => createMessage(messageData)));
    }
};

const addCustomValidation = (input) => {
    if (input.value === input.value.toUpperCase()) {
        input.setCustomValidity('No introduzcas todo el texto en mayúsculas');
    } else {
        input.setCustomValidity('');
    }
};

const addErrorClass = (input) => {
    if (!input.checkValidity()) {
        input.classList.add('error');
    } else {
        input.classList.remove('error');
    }
};

export const handleValidation = (formInputs) => {
    for (let i = 0; i < formInputs.length; i += 1) {
        const input = formInputs[i];
        input.addEventListener('focus', () => {
            input.classList.add('focus');
        });
        input.addEventListener('blur', () => {
            input.classList.remove('focus');
            addCustomValidation(input);
            addErrorClass(input);
        });
    }
};

export const updateMessageForm = (articleId) => {
    const messageForm = document.getElementById('message-form');
    const submitFormButton = document.getElementById('btn-message');
    const formInputs = messageForm.getElementsByClassName('message-input');
    const MessageServiceInstance = new MessageService();
    const id_article = document.getElementById('id_article');
    id_article.value = articleId
    handleValidation(formInputs);
    submitFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        submitFormButton.disable = true;
        reportValidity(messageForm);
        if (messageForm.checkValidity()) {
            MessageServiceInstance.postMessage(getFormData(formInputs)).then(
                (response) => {
                    if (response === true) {
                        console.log('ok')
                        location.reload();
                    }
                }
            );
            submitFormButton.disable = false;
        }
    });
};

export const updateForm = () => {
    const submitFormButton = document.getElementById('btn-search');
    const articlesServiceInstance = new ArticleService();
    submitFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        var value = document.getElementById('search').value
        console.log(value);
        articlesServiceInstance.searchArticle(value).then((articlesJson) => {
            articles.innerHTML = '';
            loadarticles(articlesJson, articles);
        }).catch(() => {
            articles.innerHTML = 'There was an error, please reload';
        });
    });
};

export default {
    updateArticleDetail,
    updateMesageDetail,
    updateMessageForm,
    updateForm,
    handleValidation
};