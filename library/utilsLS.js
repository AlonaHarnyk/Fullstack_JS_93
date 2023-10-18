export function getBooks() {
    return JSON.parse(localStorage.getItem("books"));
  }
  
 export  function setBooks(books) {
    localStorage.setItem("books", JSON.stringify(books));
  }