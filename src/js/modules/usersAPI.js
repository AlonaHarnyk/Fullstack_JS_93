import axios2 from 'axios';
const axios = axios2.create({
  baseURL: 'http://localhost:3000/users',
});

export class UsersAPI {
  static getUsers() {
    return axios.get().then(res => res.data);
  }
  static createUser(user) {
    return axios.post('', user).then(res => res.data);
  }
  static updateUser({ id, ...user }) {
    return axios.patch(`/${id}`, user).then(res => res.data);
  }
  static resetUser({ id, ...user }) {
    return axios.put(`/${id}`, user).then(res => res.data);
  }
  static deleteUser(id) {
    return axios.delete(`/${id}`, user);
  }
}
