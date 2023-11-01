const BASE_URL = 'https://newsapi.org';
const END_POINT = '/v2/everything';
const KEY = 'c8747511a2c34730a83caaff4f3693e7';

export class NewsAPI {
  query = '';
  #pageSize = 10;
  page = 1;

  getArticles() {
    const PARAMS = new URLSearchParams({
      apiKey: KEY,
      q: this.query,
      pageSize: this.#pageSize,
      page: this.page,
    });

    const url = `${BASE_URL}${END_POINT}?${PARAMS}`;
    return fetch(url).then(res => res.json());
  }

  get pageSize() {
    return this.#pageSize;
  }
}
