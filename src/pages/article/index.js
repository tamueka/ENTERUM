import { updateHeader } from 'components/header/header-component';
import { updateArticleDetail } from 'components/article-detail/article-detail-component';
import ArticleService from 'services/article-service';
import queryString from 'query-string';
import 'styles/main.scss';

const ArticleServiceInstance = new ArticleService();
const query = queryString.parse(window.location.search);
const articleId = query && query.id;
if (articleId){
    ArticleServiceInstance.getArticle(articleId).then((articleJSON) =>{
        updateArticleDetail(articleJSON);
    });
}

updateHeader({ title: 'articles' , active: 'articles'});
