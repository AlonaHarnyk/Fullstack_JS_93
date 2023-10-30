import { refs } from './refs';
import heroCardTpl from '../../templates/hero-card.hbs';

const config = {
  headers: {
    'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
  },
};

export function getHero(heroName) {
  const params = new URLSearchParams({
    hero: heroName,
  });

  return fetch(
    `https://superhero-search.p.rapidapi.com/api/?${params}`,
    config,
  );
}

export function showHero(heroObj) {
  heroObj.img = heroObj.images.sm;
  console.log(heroCardTpl(heroObj));
  refs.cardContainer.innerHTML = heroCardTpl(heroObj);
}
