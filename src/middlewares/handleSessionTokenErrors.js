import * as actions from '../actions';
import * as types from '../actionTypes';
import * as utils from '../utils';

let lastRequestApiAction = null;

const handleSessionTokenErrors = ({ dispatch }) => next => (action) => {
  if (action.sessionToken) {
    lastRequestApiAction = action;
  }
  if (utils.isSessionTokenInvalidOrExpired(action.payload)) {
    dispatch(actions.sessionTokenInvalid());
    // if action.type equals types.FETCH_CURRENT_USER_FAILED, then it mean that user open app from foreground
    const openAppFromForeground = action.type === types.FETCH_CURRENT_USER_FAILED;
    dispatch(actions.refreshSessionTokenRequest({
      openAppFromForeground,
      action: lastRequestApiAction,
    }));
    return undefined;
  }
  return next(action);
};

export default handleSessionTokenErrors;
