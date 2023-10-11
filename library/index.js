let books = [
  {
    id: "1",
    title: `Apple. Computer evolution`,
    author: `Владимир Невзоров`,
    img: `https://bukva.ua/img/products/449/449532_200.jpg`,
    plot: `Richly illustrated chronological guide to the history of computers in which
       and structured information about the creation and development of Apple technology against the backdrop of history
       personal computers in general.
       The book contains descriptions of dozens of the most significant models of devices from both Apple and other manufacturers,
       accompanied by a large number of original studio photographs.
       The book is intended for a wide range of readers interested in the history of electronics.
       It can also serve as a source of inspiration for designers, marketers and entrepreneurs.`,
  },
  {
    id: "2",
    title: `How to explain computer science to a child`,
    author: `Кэрол Вордерман`,
    img: `https://bukva.ua/img/products/480/480030_200.jpg`,
    plot: `Illustrated encyclopedia in infographic format on technical, social and cultural aspects
       in informatics. Explains step by step how children can get the most out of computers and internet services,
       staying safe.
       The book covers everything from data storage to life on the Internet,
       from programming to computer attacks. About how computers function, about modern software
       software, the device of the Internet and digital etiquette. All concepts - from hacker to bitcoin -
       explained clearly with illustrations and diagrams.`,
  },
  {
    id: "3",
    title: `The path of the Scrum Master. #ScrumMasterWay`,
    author: `Зузана Шохова`,
    img: `https://bukva.ua/img/products/480/480090_200.jpg`,
    plot: `This book will help you become an outstanding Scrum Master and achieve great results with your team.
       It is illustrated and easy to understand - you can read it in a weekend, and use the resulting
       knowledge throughout your career.
       Based on 15 years of experience, Zuzana Shokhova explains the roles and responsibilities of a Scrum Master,
       how to solve everyday tasks, what competencies are needed to become an outstanding scrum master,
       What tools does he need to use?`,
  },
];

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
  const bookTitle = target.textContent;
  const book = books.find(({ title }) => title === bookTitle);
  const markup = createPreviewMarkup(book);
  secondDiv.innerHTML = "";
  secondDiv.insertAdjacentHTML("afterbegin", markup);
}

function createPreviewMarkup({ id, title, author, img, plot }) {
  return `<div data-id='${id}' class='book-info'>
    <h2>${title}</h2>
    <p>${author}</p>
    <img src='${img}' alt='${title}'>
    <p>${plot}</p>
    </div>`;
}

function deleteBook(target) {
  const bookId = target.parentNode.id;
  books = books.filter(({ id }) => id !== bookId);
  renderList();
  const bookInfo = document.querySelector(".book-info");
  if (bookInfo && bookInfo.dataset.id === bookId) {
    secondDiv.innerHTML = "";
  }
}

function addBook() {
  const newBook = {
    id: Date.now(),
    title: "",
    author: "",
    img: "",
    plot: "",
  };
  secondDiv.innerHTML = createFormMarkup(newBook);
  fillObject(newBook);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log(newBook);
    books.push(newBook);
    renderList();
    const markup = createPreviewMarkup(newBook);
    secondDiv.innerHTML = "";
    secondDiv.insertAdjacentHTML("afterbegin", markup);
  });
}

function createFormMarkup({ title, author, img, plot }) {
  return `
    <form>
    <label>Title: <input type='text' name='title' value='${title}'></label>
    <label>Author: <input type='text' name='author' value='${author}'></label>
    <label>Image:<input type='url' name='img' value='${img}'></label>
    <label>Plot:<input type='text' name='plot' value='${plot}'></label>
    <button>Save</button>
    </form>
    `;
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
  const bookId = target.parentNode.id;
  const book = books.find(({ id }) => id === bookId);
  secondDiv.innerHTML = createFormMarkup(book);
  fillObject(book);
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(bookId);
    const index = books.findIndex(({ id }) => id === bookId);
    books[index] = book;
    renderList();
    const markup = createPreviewMarkup(book);
    secondDiv.innerHTML = "";
    secondDiv.insertAdjacentHTML("afterbegin", markup);
  });
}
