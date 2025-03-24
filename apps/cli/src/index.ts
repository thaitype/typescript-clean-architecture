import { getInjection } from '@acme/di';
import { add } from './add';

// console.log('Hello World ' + add(1, 2) + ' ' + shared());

console.log('ARGS: ', process.argv);

const userController = getInjection('UserController');

(async () => {
  await userController.create({
    body: { id: 'u1', name: 'Alice', email: 'alice@example.com' },
  });

  console.log(`User: ${JSON.stringify(await userController.get({ params: { id: 'u1' } }))}`);
})();
