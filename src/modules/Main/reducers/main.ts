import produce from "immer";
import AuthService from "modules/Main/api/MainService";
import { IFormValues } from "modules/Main/interfaces";

export const SIGN_IN_USER = "SIGN_IN_USER";
export const LOG_OUT_USER = "LOG_OUT_USER";
export const SESSION_IS_EXPIRED = "SESSION_IS_EXPIRED";

export const login = (params: IFormValues) => ({
  type: SIGN_IN_USER,
  apiCall: () => AuthService.login(params),
});

export const logout = () => ({
  type: LOG_OUT_USER,
  apiCall: () => AuthService.logout(),
});

export const sessionIsExpired = (error: any) => ({
  type: SESSION_IS_EXPIRED,
  payload: error,
});

export const initialState = {
  signIn: {},
};

export default produce((draft, action) => {
  const { type, result = {} } = action;
  switch (type) {
    case SIGN_IN_USER:
      draft.signIn = result;
      break;

    case LOG_OUT_USER:
    case SESSION_IS_EXPIRED:
      return initialState;

    default:
      return draft;
  }
}, initialState);
