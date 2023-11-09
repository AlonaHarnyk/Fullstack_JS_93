import axios2 from 'axios';
const axios = axios2.create({
  baseURL: 'http://localhost:3000/users',
});

export class UsersAPI {
  static async getUsers() {
    const response = await axios.get();
    return response.data;
  }
  static async createUser(user) {
    const response = await axios.post('', user);
    return response.data;
  }
  static async updateUser({ id, ...user }) {
    const response = await axios.patch(`/${id}`, user);
    return response.data;
  }
  static async resetUser({ id, ...user }) {
    const response = await axios.put(`/${id}`, user);
    return response.data;
  }
  static async deleteUser(id) {
    const response = await axios.delete(`/${id}`, user);
    return response.data;
  }
}
