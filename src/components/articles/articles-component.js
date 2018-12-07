
import { appendComponent } from 'utils/utils';
import { createArticle } from 'components/article/article-component';
import ArticleService from 'services/article-service'


export const createArticles = () => {
    const articles = document.getElementById('articles');
    const articleServiceInstance = new ArticleService();

  articleServiceInstance.getArticles().then((articlesJson) => {
      appendComponent(articles, articlesJson.map(articleData => createArticle(articleData)));
  });
  };


export default createArticles;