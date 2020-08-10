import { graphqlHTTP } from 'express-graphql';
import schema from '../schemas';

export const graphqlRoute = (app) => {
  app.use('/graphql', graphqlHTTP({ graphiql: true, schema }));
};
