import { takeEvery } from "redux-saga/effects";
import apiCall from "middlewares/apiCallMiddleware";
import { GET_USERS_LIST, GET_USER_DETAILS } from "modules/Users/reducers/users";

export default function* watcher() {
  yield takeEvery(GET_USERS_LIST, apiCall);
  yield takeEvery(GET_USER_DETAILS, apiCall);
}
