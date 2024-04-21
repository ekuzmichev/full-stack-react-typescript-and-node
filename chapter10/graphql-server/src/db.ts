import { v4 } from "uuid";
import { Todo } from "./resolvers";

export const todos: Todo[] = [
  {
    id: v4(),
    title: "First todo",
    description: "First todo description",
  },
  {
    id: v4(),
    title: "Second todo",
    description: "Second todo description",
  },
  {
    id: v4(),
    title: "Third todo",
  },
];
