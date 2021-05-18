import { history } from "utils";

export const USER_AUTH = "USER_AUTH";

class AuthorizationUtils {
  storeSession(token: string) {
    localStorage.setItem(USER_AUTH, token);
  }

  getSessionToken() {
    return localStorage.getItem(USER_AUTH);
  }

  clearSession() {
    localStorage.removeItem(USER_AUTH);
  }

  redirectToMainForm() {
    console.log("clear");
    this.clearSession();
    history.push("/main");
  }

  redirectToHomePage() {
    const token = this.getSessionToken();
    if (token) {
      history.push("/dashboard");
    } else {
      this.redirectToMainForm();
    }
  }

  checkSessionToken() {
    const token = this.getSessionToken();
    if (!token) {
      this.redirectToMainForm();
    }
  }

  // isAnonymousApiMethod(url: string | undefined) {
  // 	if (!url) return false
  // 	return ANONYMOUS_API_METHODS.some(path => path.includes(url))
  // }
}

export default new AuthorizationUtils();
