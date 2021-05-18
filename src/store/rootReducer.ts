import { combineReducers } from "redux";
import main from "modules/Main/reducers/main";
import users from "modules/Users/reducers/users";

const reducers = combineReducers({
  main,
  users,
});

export default reducers;
