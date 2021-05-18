import { MiddlewareAPI, Dispatch } from "redux";
import { endsWith } from "lodash";
import { AuthorizationUtils } from "utils";
import {
  REQUEST_TYPE,
  SUCCESS_TYPE,
  FAILURE_TYPE,
} from "middlewares/apiCallMiddleware";
import { ActionType } from "types";
import { sessionIsExpired } from "modules/Main/reducers/main";

const DEFAULT_PAYLOAD = {
  isLoading: false,
  // @ts-ignore
  error: null,
};

const payloadMiddleware = ({ dispatch }: MiddlewareAPI) => (next: Dispatch) => (
  action: ActionType
) => {
  const { error, data = {} } = action.payload || {};

  if (error) {
    const { error: ErrorCode, status } = error;
    console.log("status!!!", status);
    if (
      ErrorCode === "InvalidSessionToken" ||
      ErrorCode === "MissingSessionIdentifier" ||
      status === 401
    ) {
      AuthorizationUtils.redirectToMainForm();
      dispatch(sessionIsExpired("Session expired"));
    }
  }

  if (!action.subtype) {
    return next(action);
  }

  if (endsWith(action.subtype, REQUEST_TYPE)) {
    action.result = {
      ...DEFAULT_PAYLOAD,
      isLoading: true,
    };
  }

  if (endsWith(action.subtype, FAILURE_TYPE)) {
    const { error: ErrorCode, status } = error;

    action.result = {
      ...DEFAULT_PAYLOAD,
      error: ErrorCode || status,
    };
  }

  if (endsWith(action.subtype, SUCCESS_TYPE)) {
    action.result = {
      data,
      ...DEFAULT_PAYLOAD,
    };
  }

  return next(action);
};

export default payloadMiddleware;
