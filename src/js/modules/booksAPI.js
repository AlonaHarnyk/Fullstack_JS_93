import axios from 'axios';

const axiosV2 = axios.create({
  baseURL: 'http://localhost:4040',
});

const BASE_URL = 'http://localhost:4040';

export class BooksAPI {
  getAllBooks() {
    return fetch(`${BASE_URL}/books`).then(response => {
      return response.json();
    });
  }

  createBook(book) {
    const options = {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    return fetch(`${BASE_URL}/books`, options);
  }

  deleteBook(id) {
    axiosV2.delete(`/books/${id}`);

    // fetch(`${BASE_URL}`, {
    //   method: 'DELETE',
    // });
  }

  resetBook({
    bookId: id,
    bookDesc: desc,
    bookTitle: title,
    bookAuthor: author,
  }) {
    const book = {
      desc,
      title,
      author,
    };

    const options = {
      method: 'PUT',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    fetch(`${BASE_URL}/books/${id}`, options);
  }

  updateBook({ id, ...book }) {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };

    fetch(`${BASE_URL}/books/${id}`, options);
  }

  createBookByAxios(book) {
    return axiosV2.post('/books', book);
  }
}
