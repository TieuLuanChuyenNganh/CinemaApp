// import bugsnag from '../configs/bugsnag.config';
import logger from '../configs/logger.config';

const errorReporting = () => next => (action) => {
  const actionType = action.type;
  const message = action.payload;
  // check if this is a FAILED action
  const isFailedAction = actionType.slice(-6) === 'FAILED';
  if (isFailedAction) {
    logger.log(message, null, actionType);
    // bugsnag.notify(new Error(`${actionType} : ${message}`));
  }
  return next(action);
};

export default errorReporting;
