import { Category } from "./Category";
import { ThreadItem } from "./ThreadItem";

export interface Thread {
  id: string;
  views: number;
  title: string;
  body: string;
  userName: string;
  userId: string;
  points: number; // Total number of likes
  createdOn: Date;
  lastModifiedOn: Date;
  threadItems: ThreadItem[];
  category: Category;
}
