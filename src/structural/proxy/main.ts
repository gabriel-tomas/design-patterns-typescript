import { SystemUserProxy } from './systemUser/systemUserProxy';

(async () => {
  const user = new SystemUserProxy('John', 'Doe');
  console.log('1 segundo');
  console.log(await user.getAddresses());

  console.log('Isso vai se repetir, muito rápido por que está em cache');
  for (let i = 0; i < 6; i++) {
    console.log(await user.getAddresses());
  }
})();
