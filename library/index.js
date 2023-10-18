import { createPreviewMarkup, createFormMarkup } from "./markupCreators.js";
import { getBooks, setBooks } from "./utilsLS.js";

const root = document.querySelector("#root");
// const root = document.getElementById('root')

const firstDiv = document.createElement("div");
firstDiv.classList.add("leftDiv");
const secondDiv = document.createElement("div");
secondDiv.classList.add("rightDiv");
root.append(firstDiv, secondDiv);

const title = document.createElement("h1");
title.textContent = "Library";
title.style.fontSize = "40px";
const list = document.createElement("ul");
const addButton = document.createElement("button");
addButton.textContent = "Add book";
firstDiv.append(title, list, addButton);

addButton.addEventListener("click", addBook);

function renderList() {
  const books = getBooks();
  const markup = books
    .map(({ id, title }) => {
      return `<li id='${id}'><p class='book-title'>${title}</p><button class='delete'>Delete</button><button class='edit'>Edit</button></li>`;
    })
    .join("");
  // list.innerHTML = ''
  // list.insertAdjacentHTML('afterbegin', markup)
  list.innerHTML = markup;
  // const titles = document.querySelectorAll(".book-title");
  // titles.forEach((title) => title.addEventListener("click", renderPreview));
  // const deleteBtns = document.querySelectorAll(".delete");
  // deleteBtns.forEach((btn) => btn.addEventListener("click", deleteBook));
}

list.addEventListener("click", handleClick);

function handleClick({ target }) {
  if (target.nodeName === "P") {
    renderPreview(target);
  } else if (target.classList.contains("delete")) {
    deleteBook(target);
  } else if (target.classList.contains("edit")) {
    editBook(target);
  }
}

renderList();

function renderPreview(target) {
  const books = getBooks();
  const bookTitle = target.textContent;
  const book = books.find(({ title }) => title === bookTitle);
  const markup = createPreviewMarkup(book);
  secondDiv.innerHTML = "";
  secondDiv.insertAdjacentHTML("afterbegin", markup);
}

function deleteBook(target) {
  const bookId = target.parentNode.id;
  const books = getBooks();
  const updatedBooks = books.filter(({ id }) => id !== bookId);
  setBooks(updatedBooks);
  renderList();
  const bookInfo = document.querySelector(".book-info");
  if (bookInfo && bookInfo.dataset.id === bookId) {
    secondDiv.innerHTML = "";
  }
}

function addBook() {
  const newBook = {
    id: String(Date.now()),
    title: "",
    author: "",
    img: "",
    plot: "",
  };
  const books = getBooks();
  secondDiv.innerHTML = createFormMarkup(newBook);
  fillObject(newBook);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(newBook);
    books.push(newBook);
    setBooks(books);
    renderList();
    const markup = createPreviewMarkup(newBook);
    secondDiv.innerHTML = "";
    secondDiv.insertAdjacentHTML("afterbegin", markup);
  });
}

function fillObject(book) {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) =>
    input.addEventListener("change", (event) => {
      // console.log(event.target);
      // console.log(event.target.name);
      // console.log(event.target.value);
      book[event.target.name] = event.target.value;
    })
  );
}

function editBook(target) {
  const books = getBooks();
  const bookId = target.parentNode.id;
  const book = books.find(({ id }) => id === bookId);
  secondDiv.innerHTML = createFormMarkup(book);
  fillObject(book);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const index = books.findIndex(({ id }) => id === bookId);
    books[index] = book;
    setBooks(books);
    renderList();
    const markup = createPreviewMarkup(book);
    secondDiv.innerHTML = "";
    secondDiv.insertAdjacentHTML("afterbegin", markup);
  });
}
