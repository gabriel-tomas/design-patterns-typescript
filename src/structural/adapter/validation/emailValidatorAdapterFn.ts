import isEmail from 'validator/lib/isEmail';
import { EmailValidatorFnProtocol } from './emailValidatorProtocol';

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = function (
  value: string,
) {
  return isEmail(value);
};
