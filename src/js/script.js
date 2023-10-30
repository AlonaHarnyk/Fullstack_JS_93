function getTodos(objParams) {
  const BASE_URL = 'https://random-user-generator1.p.rapidapi.com';
  const END_POINT = '/locale/id_ID';

  const params = new URLSearchParams(objParams);

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'random-user-generator1.p.rapidapi.com',
    },
  };

  return fetch(`${BASE_URL}${END_POINT}?${params}`, options).then(res =>
    res.json(),
  );
}

getTodos({
  limit: 1,
}).then(users => {
  document.querySelector('#userName').textContent = users[0].name;
});
