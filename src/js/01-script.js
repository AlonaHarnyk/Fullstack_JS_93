import '../css/common.css';
import { refs } from './modules/refs.js';
import { getQuotes } from './modules/quotesAPI';
import quotesTemplate from '../templates/quotes-card';
import heroesTemplate from '../templates/hero-card';
import { getHero } from './modules/heroesAPI';

// =======================================================
refs.form.addEventListener('submit', onSubmitHandler);

function onSubmitHandler(e) {
  e.preventDefault();

  let dataPromise = getQuotes();
  dataPromise.then(value => {
    refs.cardContainer.innerHTML = quotesTemplate(value);
  });
}
// =======================================================

refs.form1.addEventListener('submit', onSearchHero);

function onSearchHero(e) {
  e.preventDefault();

  const heroName = refs.form1.elements.query.value;
  getHero(heroName)
    .then(resolve => resolve.json())
    .then(hero => {
      console.log(heroesTemplate(hero));
      refs.cardContainer1.innerHTML = heroesTemplate(hero);
    });
}
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
// =======================================================
