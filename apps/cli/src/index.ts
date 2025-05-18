import dotenv from 'dotenv';
import { AppContextBuilder } from '@acme/di';

dotenv.config();

console.log('ARGS: ', process.argv);

const app = new AppContextBuilder({
  mongo: {
    uri: process.env.MONGO_URI!,
    options: {
      timeoutMS: 1000,
    },
  },
});

(async () => {
  await app.init();
  const userController = app.get('UserController');
  // const createdUser = await userController.create({ name: 'Alice', email: 'alice@example.com' });

  const listUsers = await userController.listWithPagination({
    limit: 2,
    offset: 2,
  });
  for (const user of listUsers.items) {
    console.log(`User: ${JSON.stringify(user)}`);
  }
  console.log(`Has next: ${listUsers.hasNext}`);
  // console.log(`User with ID: ${JSON.stringify(createdUser.id)}`);
  console.log('Complete');
})()
  .catch(err => {
    if (err instanceof Error) {
      console.error('Error: ', err.message);
    } else {
      console.error('Error: ', err);
    }
    process.exit(1);
  })
  .finally(async () => {
    await app.shutdown();
  });
