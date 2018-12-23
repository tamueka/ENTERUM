
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


export default createArticles;