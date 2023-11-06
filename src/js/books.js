import { BooksApi } from './modules/booksAPI';
// ===================================================

const refs = {
  createFormElem: document.querySelector('.js-create-form'),
  updateFormElem: document.querySelector('.js-update-form'),
  resetFormElem: document.querySelector('.js-reset-form'),
  deleteFormElem: document.querySelector('.js-delete-form'),
  bookListElem: document.querySelector('.js-article-list'),
};
const booksAPI = new BooksApi();
// ===================================================
refs.createFormElem.addEventListener('submit', onBookCreate);
refs.updateFormElem.addEventListener('submit', onBookUpdate);
refs.resetFormElem.addEventListener('submit', onBookReset);
refs.deleteFormElem.addEventListener('submit', onBookDelete);

function onBookCreate(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  booksAPI
    .createBook(book)
    .then(createdBook => {
      const markup = bookTemplate(createdBook);
      refs.bookListElem.insertAdjacentHTML('beforeend', markup);
    })
    .catch(err => {
      console.log(err);
    });

  e.target.reset();
}
function onBookUpdate(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);

  formData.forEach((value, key) => {
    if (!value) return;
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  booksAPI
    .updateBook(book)
    .then(newBook => {
      rerenderBook(newBook);
    })
    .catch(err => {
      console.log(err);
    });
  e.target.reset();
}
function onBookReset(e) {
  e.preventDefault();
  const book = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    key = key.replace('book', '').toLowerCase();
    book[key] = value;
  });

  booksAPI
    .resetBook(book)
    .then(newBook => {
      rerenderBook(newBook);
    })
    .catch(err => {
      console.log(err);
    });
  e.target.reset();
}
function onBookDelete(e) {
  e.preventDefault();
  const id = e.target.elements.bookId.value;
  booksAPI.deleteBook(id).then(() => {
    const oldBook = refs.bookListElem.querySelector(`li[data-id="${id}"]`);
    oldBook.remove();
  });
  e.target.reset();
}

// ===================================================

function bookTemplate({ author, desc, id, title }) {
  return `<li class="card book-item" data-id="${id}">
    <h4>${id} - ${title}</h4>
    <p>${desc}</p>
    <p>${author}</p>
</li>`;
}

function rerenderBook(book) {
  const oldBook = refs.bookListElem.querySelector(`li[data-id="${book.id}"]`);
  const markup = bookTemplate(book);
  oldBook.insertAdjacentHTML('afterend', markup);
  oldBook.remove();
}

function renderBooks(books) {
  const markup = books.map(bookTemplate).join('');
  refs.bookListElem.innerHTML = markup;
}

// ===================================================
function onLoadPage() {
  booksAPI.getBooks().then(books => {
    renderBooks(books);
  });
}
onLoadPage();
// ===================================================
