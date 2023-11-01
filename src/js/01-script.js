import { NewsApi } from './modules/newsApi';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  loadBtnElem: document.querySelector('.js-btn-load'),
  spinnerElem: document.querySelector('.spinner'),
};

const newsApi = new NewsApi();

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  newsApi.q = e.target.elements.query.value;
  newsApi.page = 1;
  showSpinner();
  newsApi
    .getArticles()
    .then(data => {
      refs.articleListElem.innerHTML = '';
      const markup = articlesTemplate(data.articles);
      refs.articleListElem.insertAdjacentHTML('beforeend', markup);
      newsApi.totalPage = Math.ceil(data.totalResults / 20);
      updateBtnStatus();
    })
    .catch(er => console.log(er))
    .finally(() => {
      hideSpinner();
    });
}

refs.loadBtnElem.addEventListener('click', onLoadMoreClick);

function onLoadMoreClick(e) {
  newsApi.page++;
  updateBtnStatus();
  showSpinner();
  newsApi
    .getArticles()
    .then(data => {
      const markup = articlesTemplate(data.articles);
      refs.articleListElem.insertAdjacentHTML('beforeend', markup);
    })
    .catch(er => console.log(er))
    .finally(() => {
      hideSpinner();
    });
}

function articleTemplate({
  urlToImage,
  title,
  description,
  author,
  publishedAt,
}) {
  return `<li class="card news-card">
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

function articlesTemplate(articles) {
  const markup = articles.map(articleTemplate).join('');
  return markup;
}

function updateBtnStatus() {
  //page = 5;
  // totalPage = 5;
  refs.loadBtnElem.disabled = newsApi.page >= newsApi.totalPage; // true
}

function showSpinner() {
  refs.spinnerElem.classList.remove('is-hidden');
}

function hideSpinner() {
  refs.spinnerElem.classList.add('is-hidden');
}
