import * as selectors from '../selectors';

const attachSessionToken = ({ getState }) => {
  return next =>
    (action) => {
      const state = getState();
      // check if need attach app token
      if (action.sessionToken === true) {
        const sessionTokenValue = selectors.getSessionToken(state);
        const newAction = { ...action, sessionToken: sessionTokenValue };
        return next(newAction);
      }
      return next(action);
    };
};

export default attachSessionToken;
