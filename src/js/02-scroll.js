import { NewsApi } from './modules/newsApi';

const refs = {
  formEl: document.querySelector('.js-search-form'),
  articleListElem: document.querySelector('.js-article-list'),
  targetElem: document.querySelector('.target'),
};
const newsApi = new NewsApi();

var options = {
  rootMargin: '500px',
  threshold: 0,
};
const callback = function (entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    newsApi.page++;
    updateStatusObserver();
    newsApi
      .getArticles()
      .then(data => {
        const markup = articlesTemplate(data.articles);
        refs.articleListElem.insertAdjacentHTML('beforeend', markup);
      })
      .catch(er => console.log(er));
  });
};
const observer = new IntersectionObserver(callback, options);
refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  newsApi.q = e.target.elements.query.value;
  newsApi.page = 1;
  newsApi
    .getArticles()
    .then(data => {
      refs.articleListElem.innerHTML = '';
      const markup = articlesTemplate(data.articles);
      refs.articleListElem.insertAdjacentHTML('beforeend', markup);
      newsApi.totalPage = Math.ceil(data.totalResults / 20);
      observer.observe(refs.targetElem);
      updateStatusObserver();
    })
    .catch(er => console.log(er));
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

function updateStatusObserver() {
  const isLastPage = newsApi.page >= newsApi.totalPage;
  if (isLastPage) {
    console.log('Unobserve');
    observer.unobserve(refs.targetElem);
  }
}
