import { makeExecutableSchema } from 'graphql-tools';
import { userResolver } from '../resolvers/users.resolver';

const typeDefs = `
  type Query{
    users: [User]
  }

  type User{
    _id: ID
    firstName: String!
    lastName: String
    age: Int!
  }

  type Mutation{
    createUser(input: UserInput): User
    deleteUser(_id: ID): User
    updateUser(_id: ID, input: UserInput): User
  }

  input UserInput{
    firstName: String!
    lastName: String
    age: Int!
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers: userResolver });