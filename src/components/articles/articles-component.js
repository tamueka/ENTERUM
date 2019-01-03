
import { appendComponent } from 'utils/utils';
import { createArticle } from 'components/article/article-component';
import ArticleService from 'services/article-service';



export const createArticles = () => {
    const articles = document.getElementById('articles');
    const articleServiceInstance = new ArticleService();

  articleServiceInstance.getArticles().then((articlesJson) => {
      articles.innerHTML = '';
      if (articlesJson.lenght === 0){
          articles.innerHTML = 'No articles'
      }else{
            appendComponent(articles, articlesJson.map(articleData => createArticle(articleData)));
      }
    }).catch((error)=>{
        articles.innerHTML = 'There was an error, please reload';
    });

    return articles;
  };

export const updateMesageDetail_global = (data) => {
    const messages = document.getElementById('message-detail');
    const messageArticles = messages;
    if (data.length === 0) {
    } else {
        appendComponent(messageArticles,
            data.map(messageData => createMessage(messageData)));
    }
};

export const updateMessageForm_global = () => {
    const messageForm = document.getElementById('message-form');
    const submitFormButton = document.getElementById('btn-message');
    const formInputs = messageForm.getElementsByClassName('message-input');
    const MessageServiceInstance = new MessageService();
    handleValidation(formInputs);
    submitFormButton.addEventListener('click', (e) => {
        e.preventDefault();
        submitFormButton.disable = true;
        reportValidity(messageForm);
        if (messageForm.checkValidity()) {
            MessageServiceInstance.postMessage_global(getFormData(formInputs)).then(
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

export default {
    createArticles,
    updateMesageDetail_global,
    updateMessageForm_global

};
