export class NewsApi {
  static #API_KEY = 'c8747511a2c34730a83caaff4f3693e7';
  static #PAGE_SIZE = 20;
  static #BASE_URL = 'https://newsapi.org/v2';

  constructor() {
    this.q = 'Bitcoin';
    this.page = 1;
    this.totalPage = 1;
  }

  getArticles() {
    const END_POINT = '/everything?';
    const PARAMS = new URLSearchParams({
      q: this.q,
      page: this.page,
      pageSize: NewsApi.#PAGE_SIZE,
      apiKey: NewsApi.#API_KEY,
    });

    const url = NewsApi.#BASE_URL + END_POINT + PARAMS;

    return fetch(url)
      .then(res => {
        if (res.ok) return res.json();
        return Promise.reject(res.status);
      })
      .catch(er => {
        console.log(er);
      });
  }
}
