const refs = {
  formEl: document.querySelector('.js-search-form[data-id="1"]'),
  heroEl: document.querySelector('.js-hero-container'),
};

function searchHero(hero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';
  const PARAMS = `?hero=${hero}`;
  const url = BASE_URL + END_POINT + PARAMS;
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const q = e.target.elements.query.value;
  searchHero(q).then(hero => {
    renderHero(hero);
  });
});

function heroTemplate(hero) {
  const image = hero.images.lg;
  const fullName = hero.biography.fullName;
  return `
  <div class="hero-card card">
      <div class="image-container">
        <img
          src="${image}"
          alt="#"
          class="hero-image"
        />
      </div>
      <div class="hero-body">
        <h4 class="hero-name">${fullName}</h4>
        <p class="hero-bio">
          ${hero.name} - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Vero, sed facilis, necessitatibus at neque cum deserunt maxime quos
          laudantium doloremque nesciunt ea voluptates! Atque fugiat assumenda
          incidunt laborum quas a!
        </p>
      </div>
    </div>
  `;
}

function renderHero(hero) {
  const markup = heroTemplate(hero);
  refs.heroEl.insertAdjacentHTML('beforeend', markup);
}
