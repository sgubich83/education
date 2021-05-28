import { BaseAPI } from "api";
import { AuthorizationUtils } from "utils";
import { IFormValues } from "modules/Main/interfaces";

class MainService extends BaseAPI {
  login(data: IFormValues) {
    return this.call({
      method: "POST",
      url: "/login",
      data,
    });
  }

  logout() {
    const token = AuthorizationUtils.getSessionToken();
    return this.call({
      method: "DELETE",
      url: `/logout/${token}`,
    });
  }
}

export default new MainService();
