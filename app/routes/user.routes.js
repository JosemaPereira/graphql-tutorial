import { graphqlHTTP } from 'express-graphql';
import schema from '../graphql/schemas/users.schema';

export const graphqlRoute = (app) => {
  app.use('/user', graphqlHTTP({ graphiql: true, schema }));
};
