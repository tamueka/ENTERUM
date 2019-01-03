import { updateArticleDetail, updateMesageDetail, updateMessageForm } from '../../components/article-detail/article-detail-component';
import queryString from 'query-string';
import ArticleService from '../../services/article-service';
import MessageService from '../../services/message-service';
import { updateHeader } from 'components/header/header-component';

import 'styles/main.scss';

const ArticleServiceInstance = new ArticleService();
const MessageServiceInstance = new MessageService();
const query = queryString.parse(window.location.search);
const articleId = query && query.id;

if (articleId) {
    ArticleServiceInstance.getArticle(articleId).then((articleJSON) => {
        updateArticleDetail(articleJSON);
    });
    MessageServiceInstance.getMessage(articleId).then((messageJSON) => {
        updateMesageDetail(messageJSON);
    });
}
updateHeader({ title: 'articles', active: 'articles' });
updateMessageForm(articleId);

