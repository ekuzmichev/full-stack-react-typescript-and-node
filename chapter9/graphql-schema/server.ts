import {
  ApolloServer,
  makeExecutableSchema,
  PubSub,
} from "apollo-server-express";
import express from "express";
import { createServer } from "http";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const app = express();
const pubsub = new PubSub();

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
  schema,
  context: ({ req, res }: any) => ({ req, res, pubsub }),
});

apolloServer.applyMiddleware({ app, cors: false });

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 8000 }, () => {
  console.log("GraphQL server ready", apolloServer.graphqlPath);
  console.log("GraphQL subs server ready", apolloServer.subscriptionsPath);
});
