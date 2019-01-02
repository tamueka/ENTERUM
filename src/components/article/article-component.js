
export const createArticle = ({
            title,
            imageUrl,
            text,
            author,
            nameArticle,
            imageProfile,
            publicationTime,
            commentsNumber,
            id
        } = 
        {   title: 'No title', imageUrl: 'No image', text: 'No text', author: 'No author', nameArticle:'No name', 
    imageProfile:'No image', publicationTime:'No publication', commentsNumber:'No comments',
}) => {
    const article = document.createElement('div');
    article.classList.add('article');
    article.innerHTML = `
    <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover" style="width:360px; overflow: hidden; border-radius:1px;">
        <img src="${imageUrl}" alt="Url image" class="d-block w-full">
        <div class="px-2 py-2">
            <a class="article-title" href="/article/?id=${id}" class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">${title}</a>
            <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style="line-height: 1.25;">${nameArticle}</h1>
            <p class="mb-1">${text} &hellip;</p>
            <p class="mb-1">${author}</p>
            <div>
                <img src="${imageProfile}" alt="Url image" class="d-block" style ="height:50px; width=50px; border-radius:50%; padding-bottom: 10px;">
            </div>
            <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">${publicationTime}</p>
            <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">${commentsNumber}</p>
        </div>
        <a href ="/article/?id=${id}" class="article-title text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link">Read More</a>
    </div>
  `;

  
    return article;
};

export default { createArticle };


