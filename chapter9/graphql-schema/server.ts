import { ApolloServer, makeExecutableSchema } from "apollo-server-express";
import express from "express";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const app = express();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }: any) => ({ req, res }),
});

apolloServer.applyMiddleware({ app, cors: false });

app.listen(8000, () => {
  console.log("GraphQL server ready");
});
