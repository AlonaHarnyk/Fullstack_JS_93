import { refs } from "./refs";
import quotesCardTemplate from "../../templates/quotes-card";

export function showQuotes(quotes) {
  console.log(quotes);
  refs.cardContainer2.innerHTML = quotesCardTemplate(quotes);
}

export function getQuotes() {
  const config = {
    headers: {
      "X-RapidAPI-Key": "9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4",
      "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
    },
  };
  return fetch(`https://quotes15.p.rapidapi.com/quotes/random/?q=123`, config)
    .then((resp) => resp.json())
    .then((r) => r);
}
