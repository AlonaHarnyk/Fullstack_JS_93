import { NewsAPI } from './modules/newsApi';

const newsApi = new NewsAPI();
let maxPage = 1;

const refs = {
  formElem: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  btnLoadMore: document.querySelector('.js-btn-load'),
};

refs.formElem.addEventListener('submit', onFormSubmit);
refs.btnLoadMore.addEventListener('click', onLoadMoreClick);

function onFormSubmit(e) {
  e.preventDefault();
  const query = e.target.elements.query.value;
  newsApi.query = query;
  newsApi.page = 1;
  newsApi.getArticles().then(data => {
    maxPage = Math.ceil(data.totalResults / newsApi.pageSize);
    refs.articleListElem.innerHTML = '';
    renderArticles(data.articles);
    refs.btnLoadMore.disabled = false;
    updateStatusBtn();
  });
}

function onLoadMoreClick(e) {
  newsApi.page += 1;
  newsApi.getArticles().then(data => {
    renderArticles(data.articles);
    updateStatusBtn();
  });
}

function updateStatusBtn() {
  if (newsApi.page === maxPage) {
    refs.btnLoadMore.disabled = true;
  }
}

function templateArticle({
  author,
  title,
  description,
  content,
  urlToImage,
  publishedAt,
}) {
  return `
  <li class="card news-card">
        <img loading="lazy"
          class="news-image"
          src="${urlToImage}"
          alt="${title}"
        />
        <h3 class="card-title">
          ${title}
        </h3>
        <p class="card-desc">
        ${description}
        </p>
        <div class="card-footer">
          <span>${author}</span>
          <span>${publishedAt}</span>
        </div>
      </li>`;
}

function renderArticles(articles) {
  const markup = articles.map(templateArticle).join('');
  // refs.articleListElem.innerHTML = markup;
  refs.articleListElem.insertAdjacentHTML('beforeend', markup);
}
