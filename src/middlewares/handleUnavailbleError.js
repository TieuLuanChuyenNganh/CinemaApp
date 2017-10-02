import * as actions from '../actions';
import * as utils from '../utils';

let lastRequestApiAction = null;

const handleUnavailbleError = ({ dispatch }) => next => (action) => {
  if (action.sessionToken) {
    lastRequestApiAction = action;
  }
  if (utils.isServiceUnavaiable(action.payload)) {
    dispatch(actions.serviceUnavailbleHandleRequest(lastRequestApiAction));
    return undefined;
  }
  return next(action);
};

export default handleUnavailbleError;
