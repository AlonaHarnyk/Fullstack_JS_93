const refs = {
  formEl: document.querySelector('.js-search-form[data-id="2"]'),
  infoEl: document.querySelector('.js-binance-info'),
};

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.query.value;
  getPrice(query).then(result => {
    renderTicker(result);
  });
});

function getPrice(symbol) {
  const BASE_URL = 'https://binance43.p.rapidapi.com';
  const END_POINT = '/ticker/price';
  const PARAMS = `?symbol=${symbol}`;
  const url = `${BASE_URL}${END_POINT}${PARAMS}`;
  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

function renderTicker({ price, symbol }) {
  const markup = `
  <span>${symbol}</span>
  <span>${(+price).toFixed(2)}</span>
  `;
  refs.infoEl.innerHTML = markup;
}
