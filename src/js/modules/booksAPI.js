import axios2 from 'axios';

const axios = axios2.create({
  baseURL: 'http://localhost:3000/books',
  params: { apiKey: 'sdsrgdtgdrgsr' },
});

export class BooksAPI {
  getBooks() {
    return axios.get().then(res => res.data);
  }
  createBook(book) {
    return axios.post('', book).then(res => res.data);
  }
  resetBook(id, book) {
    return axios.put(`/${id}`, book).then(res => res.data);
  }
  updateBook(id, book) {
    return axios.patch(`/${id}`, book).then(res => res.data);
  }
  deleteBook(id) {
    return axios.delete(`/${id}`);
  }
}

export class BooksAPIV2 {
  BASE_URL = 'http://localhost:3000';
  END_POINT = '/books';

  getBooks() {
    const url = this.BASE_URL + this.END_POINT;
    return fetch(url).then(res => res.json());
  }

  createBook(book) {
    const url = this.BASE_URL + this.END_POINT;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  resetBook(id, book) {
    const url = this.BASE_URL + this.END_POINT + `/${id}`;
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  updateBook(id, book) {
    const url = this.BASE_URL + this.END_POINT + `/${id}`;
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    };

    return fetch(url, options).then(res => res.json());
  }

  deleteBook(id) {
    const url = this.BASE_URL + this.END_POINT + `/${id}`;
    const options = {
      method: 'DELETE',
    };
    return fetch(url, options);
  }
}
