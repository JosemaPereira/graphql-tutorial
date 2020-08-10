import { task } from '../providers/db.dump';

export const resolvers = {
  Query: {
    hello: () => 'Hello GraphQL',
    greet: (root, { name }) => `Hello ${name}`,
    tasks: () => task,
  },
};
