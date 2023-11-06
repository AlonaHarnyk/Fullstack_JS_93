import '../css/common.css';
import { BooksAPI } from './modules/booksAPI.js';
import cardBook from '../templates/card-books.hbs';
import exampleTemplate from '../templates/example.hbs';

const booksApi = new BooksAPI();
let listBooks = [];

const refs = {
  createForm: document.querySelector('.js-create-form'),
  updateForm: document.querySelector('.js-update-form'),
  resetForm: document.querySelector('.js-reset-form'),
  btnLoadMore: document.querySelector('.js-btn-load'),
  bookList: document.querySelector('.js-articl-list'),
  deleteForm: document.querySelector('.js-delete-form'),
};

refs.createForm.addEventListener('submit', onCreateFormSubmit);
refs.deleteForm.addEventListener('submit', onDeleteFormSubmit);
refs.resetForm.addEventListener('submit', onResetFormSubmit);
refs.updateForm.addEventListener('submit', onUpdateFormSubmit);

function onCreateFormSubmit(e) {
  e.preventDefault();

  // const book = new FormData(e.target);
  // console.log(book);

  const book = {
    title: e.target.elements.bookTitle.value,
    author: e.target.elements.bookAuthor.value,
    desc: e.target.elements.bookDesc.value,
  };

  booksApi
    .createBook(book)
    .then(response => {
      return response.json();
    })
    .then(book => {
      listBooks.push(book);
      renderBooks(listBooks);
    });
}

function onResetFormSubmit(e) {
  e.preventDefault();

  const book = new FormData(e.target);
  const bookForUpdate = {};

  book.forEach((value, key) => {
    bookForUpdate[key] = value;
  });

  // console.log(book.get('bookId'));
  // const id = book.get('bookId');
  // book.delete('bookId');

  booksApi.resetBook(bookForUpdate);
}

function onUpdateFormSubmit(e) {
  e.preventDefault();

  const book = new FormData(e.target);
  const bookForUpdate = {};

  book.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    if (value) {
      bookForUpdate[key] = value;
    }
  });

  booksApi.updateBook(bookForUpdate);
}

function onDeleteFormSubmit(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  booksApi.deleteBook(id);
}

booksApi.getAllBooks().then(books => {
  listBooks = books;
  renderBooks(books);
});

function renderBooks(books) {
  refs.bookList.innerHTML = cardBook(books);
}
