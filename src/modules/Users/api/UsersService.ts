import { BaseAPI } from "api";

class UsersService extends BaseAPI {
  getUsers() {
    return this.call({
      method: "GET",
      url: "/users",
    });
  }

  getUserDetails(id: string) {
    return this.call({
      method: "GET",
      url: `/users/${id}`,
    });
  }
}

export default new UsersService();
