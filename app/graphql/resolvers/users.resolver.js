import User from '../../models/user.model';

export const userResolver = {
  Query: {
    users: async () => {
      const users = await User.find();
      return users;
    },
  },
  Mutation: {
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
