import { UsersAPI } from './modules/usersAPI';

const refs = {
  userListElem: document.querySelector('.js-user-list'),
  createUserForm: document.querySelector('.js-create-form'),
  updateUserForm: document.querySelector('.js-update-form'),
  resetUserForm: document.querySelector('.js-reset-form'),
  deleteUserForm: document.querySelector('.js-delete-form'),
};
// ============================================================

refs.createUserForm.addEventListener('submit', onUserCreate);
refs.updateUserForm.addEventListener('submit', onUserUpdate);
refs.resetUserForm.addEventListener('submit', onUserReset);
// refs.deleteUserForm.addEventListener('submit', onUserDelete);

function onUserCreate(e) {
  e.preventDefault();
  const form = e.target;
  const { elements } = form;

  const user = {
    name: elements.userName.value,
    phone: elements.userPhone.value,
    email: elements.userEmail.value,
    avatar: 'test',
  };

  UsersAPI.createUser(user).then(createdUser => {
    const markup = userTemplate(createdUser);
    refs.userListElem.insertAdjacentHTML('beforeend', markup);
  });

  form.reset();
}

function onUserUpdate(e) {
  e.preventDefault();

  const user = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    if (value) {
      key = key.replace('user', '').toLowerCase();
      user[key] = value;
    }
  });

  UsersAPI.updateUser(user).then(updatedUser => {
    const markup = userTemplate(updatedUser);
    const oldUser = refs.userListElem.querySelector(`li[data-id="${user.id}"]`);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  });
}
function onUserReset(e) {
  e.preventDefault();

  const user = {};
  const formData = new FormData(e.target);
  formData.forEach((value, key) => {
    key = key.replace('user', '').toLowerCase();
    user[key] = value;
  });

  UsersAPI.resetUser(user).then(updatedUser => {
    const markup = userTemplate(updatedUser);
    const oldUser = refs.userListElem.querySelector(`li[data-id="${user.id}"]`);
    oldUser.insertAdjacentHTML('afterend', markup);
    oldUser.remove();
  });
}
function onUserDelete(e) {}

// ============================================================

UsersAPI.getUsers().then(renderUsers);

function userTemplate({ name, email, phone, avatar, id }) {
  const url = `https://source.unsplash.com/500x500/?random=${id}&avatar,user,man`;

  return `<li class="card user-item" data-id=${id}>
  <img src="${url}" alt="#" class="user-avatar" />
  <h3>${name}</h3>
  <p>${email}</p>
  <p>${phone}</p>
</li>`;
}
function renderUsers(userList) {
  const markup = userList.map(userTemplate).join('');
  refs.userListElem.innerHTML = markup;
}
