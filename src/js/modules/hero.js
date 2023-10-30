const refs = {
  formEl: document.querySelector('.js-search-form[data-id="1"]'),
  heroEl: document.querySelector('.js-hero-container'),
};

refs.formEl.addEventListener('submit', event => {
  event.preventDefault();
  const heroName = event.target.elements.query.value.trim();
  searchHero(heroName)
    .then(hero => {
      renderHero(hero);
    })
    .catch(err => {
      console.log(err.message);
    });
});

function searchHero(heroInfo) {
  const baseUrl = 'https://superhero-search.p.rapidapi.com/api/';
  const PARAMS = new URLSearchParams({ hero: heroInfo });
  const url = `${baseUrl}?${PARAMS}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

function renderHero({ name, biography: { fullName }, images: { lg } }) {
  const markup = `<div class="hero-card card">
    <div class="image-container">
      <img
        src="${lg}"
        alt="#"
        class="hero-image"
      />
    </div>
    <div class="hero-body">
      <h4 class="hero-name">${fullName}</h4>
      <p class="hero-bio">
        ${name} - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, sed
        facilis, necessitatibus at neque cum deserunt maxime quos laudantium
        doloremque nesciunt ea voluptates! Atque fugiat assumenda incidunt
        laborum quas a!
      </p>
    </div>
  </div>`;

  refs.heroEl.insertAdjacentHTML('beforeend', markup);
}
