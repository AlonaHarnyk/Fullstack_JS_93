import axios from 'axios';

function foo() {
  return axios.request({
    baseURL: 'https://pokeapi.co/api/v2',
    url: '/pokemon',
    params: { limit: 10, offset: 0 },
    method: 'get',
    transformResponse: [
      function (data) {
        data = JSON.parse(data);
        data.params = { limit: 10, offset: 0 };
        return data;
      },
    ],
    validateStatus: function (status) {
      return status === 200 || status === 201; // default
    },
  });
}

foo().then(res => {
  console.log(res);
});
