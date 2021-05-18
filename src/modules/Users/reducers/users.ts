import produce from "immer";
import UsersService from "modules/Users/api/UsersService";
import { SESSION_IS_EXPIRED } from "modules/Main/reducers/main";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAILS = "GET_USER_DETAILS";

export const getUsers = () => ({
  type: GET_USERS_LIST,
  apiCall: () => UsersService.getUsers(),
});

export const getUserDetails = (id: string) => ({
  type: GET_USER_DETAILS,
  apiCall: () => UsersService.getUserDetails(id),
});

export const initialState = {
  usersList: {},
  userDetails: {},
};

export default produce((draft, action) => {
  const { type, result = {} } = action;
  switch (type) {
    case GET_USERS_LIST:
      draft.usersList = result;
      break;

    case GET_USER_DETAILS:
      draft.userDetails = result;
      break;

    case SESSION_IS_EXPIRED:
      return initialState;

    default:
      return draft;
  }
}, initialState);
