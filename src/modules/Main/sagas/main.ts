import { takeEvery, put } from "redux-saga/effects";
import { ActionType } from "types";
import { AuthorizationUtils } from "utils";
import apiCall from "middlewares/apiCallMiddleware";
import { sessionIsExpired } from "modules/Main/reducers/main";
import { SIGN_IN_USER, LOG_OUT_USER } from "modules/Main/reducers/main";

function* login(action: ActionType) {
  const response = yield* apiCall(action);
  const { token } = response || {};
  if (token) {
    AuthorizationUtils.storeSession(token);
  }
}

function* logout(action: ActionType) {
  try {
    yield* apiCall(action);
  } finally {
    if (!action.subtype) {
      yield put(sessionIsExpired("Session expired"));
      AuthorizationUtils.redirectToMainForm();
    }
  }
}

export default function* watcher() {
  yield takeEvery(SIGN_IN_USER, login);
  yield takeEvery(LOG_OUT_USER, logout);
  // console.log('33333')
  // yield [
  // 	// @ts-ignore
  // 	yield takeEvery(LOG_OUT_USER, logout),
  // 	// @ts-ignore
  // 	yield takeEvery(SIGN_IN_USER, login),
  // ]
}
