import attachSessionToken from './attachSessionToken';
import handleSessionTokenErrors from './handleSessionTokenErrors';
import errorReporting from './errorReporting';
import handleUnavailbleError from './handleUnavailbleError';

export default [
  attachSessionToken,
  handleUnavailbleError,
  handleSessionTokenErrors,
  errorReporting,
];
