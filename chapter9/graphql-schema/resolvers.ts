import { IResolvers } from "apollo-server-express";
import { v4 } from "uuid";
import { GqlContext } from "./GqlContext";
import { todos } from "./db";

export interface User {
  id: string;
  username: string;
  email?: string;
}

export interface Todo {
  id: string;
  title: string;
  description?: string;
}

const NEW_TODO = "NEW TODO";

const resolvers: IResolvers = {
  Query: {
    getUser: async (
      obj: any,
      args: {
        id: string;
      },
      ctx: GqlContext,
      info: any
    ): Promise<User> => {
      return {
        id: v4(),
        username: "Bob",
      };
    },
    getTodos: async (
      obj: any,
      args: null,
      ctx: GqlContext,
      info: any
    ): Promise<Todo[]> => {
      return todos;
    },
  },
  Mutation: {
    addTodo: async (
      parent: any,
      args: {
        title: string;
        description: string;
      },
      { pubsub }: GqlContext,
      info: any
    ): Promise<Todo> => {
      const newTodo = {
        id: v4(),
        title: args.title,
        description: args.description,
      };
      todos.push(newTodo);
      pubsub.publish(NEW_TODO, { newTodo });
      return todos[todos.length - 1];
    },
  },
  Subscription: {
    newTodo: {
      subscribe: (parent, args: null, { pubsub }: GqlContext) => {
        return pubsub.asyncIterator(NEW_TODO);
      },
    },
  },
};

export default resolvers;
