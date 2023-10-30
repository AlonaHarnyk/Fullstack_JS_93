const refs = {
  wrapperInstagram: document.querySelector('.js-inst-wrap'),
  searchInstagramEl: document.querySelector('.js-search-form[data-id="6"]'),
};

function getUserInfo(username) {
  const BASE_URL = 'https://instagram191.p.rapidapi.com/v2';
  const END_POINT = '/user/details-by-username/';
  const PARAMS = new URLSearchParams({
    username,
    awefsef: 123,
    drgdr: 243534,
    drgdgr: 234534,
  });
  const url = `${BASE_URL}${END_POINT}?${PARAMS}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
      'X-RapidAPI-Host': 'instagram191.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}

refs.searchInstagramEl.addEventListener('submit', e => {
  e.preventDefault();
  const username = e.target.elements.query.value;
  getUserInfo(username)
    .then(renderUserInfo)
    .catch(err => {
      console.log(err);
    });
});

function renderUserInfo(user) {
  user = user.graphql.user;
  console.log(user);
  const markup = `<img
  class="profile-pic"
  src="https://source.unsplash.com/500x500/?random=1&user,userprofile,profile,avatar"
  alt="Profile Picture"
/>

<div class="username">${user.full_name}</div>
<div class="biography">
  ${user.biography}
</div>
`;

  refs.wrapperInstagram.innerHTML = markup;
}
