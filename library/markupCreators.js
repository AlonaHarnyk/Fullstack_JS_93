export const createPreviewMarkup = ({ id, title, author, img, plot }) => {
    return `<div data-id='${id}' class='book-info'>
      <h2>${title}</h2>
      <p>${author}</p>
      <img src='${img}' alt='${title}'>
      <p>${plot}</p>
      </div>`;
  }

export const createFormMarkup = ({ title, author, img, plot }) => {
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