import { fork, all } from "redux-saga/effects";
import mainSagas from "modules/Main/sagas/main";
import userSagas from "modules/Users/sagas/users";

export default function* rootSaga() {
  yield all([fork(mainSagas), fork(userSagas)]);
}
