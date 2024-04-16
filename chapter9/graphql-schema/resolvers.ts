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
      ctx: GqlContext,
      info: any
    ): Promise<Todo> => {
      todos.push({
        id: v4(),
        title: args.title,
        description: args.description,
      });
      return todos[todos.length - 1];
    },
  },
};

export default resolvers;
