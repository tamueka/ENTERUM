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
    <div class="my-2 mx-auto p-relative bg-white shadow-1" style="width:80%; overflow: hidden; border-radius:1px;">
        <img src="${imageUrl}" alt="Url image" class="d-block w-full">
        <div class="px-2 py-2">
            <a class="article-title" href="/article/?id=${id}" class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">${title}</a>
            <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1" style="line-height: 1.25;">${nameArticle}</h1>
            <p class="mb-1">${text}</p>
            <p class="mb-1">${author}</p>
            <div>
                <img src="${imageProfile}" alt="Url image" class="d-block" style ="height:50px; width=50px; border-radius:50%; padding-bottom: 10px;">
            </div>
            <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">${publicationTime}</p>
            <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">${commentsNumber}</p>
        </div>
        <p class="article-title text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link"></p>
        <a title="back" class=" back article-title text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link" href="javascript:history.back()">
        <div>
            <i class="fas fa-long-arrow-alt-left"></i>  BACK</a>
        </div>
        <div>
            <button id="like-button" class="like-button" alt="like">
                <i class="far fa-heart"></i>
            </button>
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

export default { updateArticleDetail };