import axios2 from 'axios';

const axios = axios2.create({
  baseURL: 'http://localhost:3000/books',
  headers: { test: 'hello', myKey: 'KUKU-KEY' },
  params: {
    key: '213132434234234',
  },
});

export class BooksApi {
  getBooks() {
    return axios.get().then(res => res.data);
  }

  createBook(book) {
    return axios.post('', book).then(res => res.data);
  }

  updateBook({ id, ...book }) {
    return axios.patch(`/${id}`, book);
  }

  resetBook({ id, ...book }) {
    return axios.put(`/${id}`, book).then(res => res.data);
  }

  deleteBook(id) {
    return axios.delete(`/${id}`);
  }
}
