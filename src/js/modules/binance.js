const refs = {
  formEl: document.querySelector('.js-search-form[data-id="2"]'),
  infoEl: document.querySelector('.js-binance-info'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();

  const value = e.target.elements.query.value.trim();

  getPrice(value)
    .then(data => {
      renderPrice(data);
    })
    .catch(err => {
      console.log('Don`t worry', err.message);
    });
});

function getPrice(userValue) {
  const BASE_URL = 'https://binance43.p.rapidapi.com/ticker/price';
  const PARAMS = new URLSearchParams({
    symbol: userValue,
  });
  const url = `${BASE_URL}?${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => {
    if (!res.ok) {
      throw new Error('Error');
    } else {
      return res.json();
    }
  });
}

function renderPrice({ symbol, price }) {
  const markup = `
    <span>${symbol}</span>
    <span>${Number.parseInt(price)}</span>`;

  refs.infoEl.innerHTML = markup;
}
