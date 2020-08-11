import { task } from '../providers/db.dump';
import User from '../models/user.model';

export const resolvers = {
  Query: {
    hello: () => 'Hello GraphQL',
    greet: (root, { name }) => `Hello ${name}`,
    tasks: () => task,
    users: async () => {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
    createTask: (_, { input }) => {
      input._id = task.length;
      task.push(input);
      return input;
    },
    createUser: async (_, { input }) => {
      const user = new User(input);
      await user.save();
      return user;
    },
    deleteUser: async (_, { _id }) => {
      return await User.findByIdAndDelete(_id);
    },
    updateUser: async (_, { _id, input }) => {
      return await User.findByIdAndUpdate(_id, input, { new: true });
    },
  },
};
