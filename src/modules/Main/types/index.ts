import { ActionType } from "types";
import { SESSION_IS_EXPIRED, initialState } from "../reducers/main";

export type SessionExpiredAction = ActionType<typeof SESSION_IS_EXPIRED>;

export type AuthActionTypes = SessionExpiredAction;

export type InitialAuthState = typeof initialState;
