import { EmailValidatorClassAdapter } from './validation/emailValidatorAdapterClass';
import { EmailValidatorProtocol } from './validation/emailValidatorProtocol';

function validEmail(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log(`${email} é válido`);
  } else {
    console.log(`${email} não é válido`);
  }
}

validEmail(new EmailValidatorClassAdapter(), 'gabriel@com');
