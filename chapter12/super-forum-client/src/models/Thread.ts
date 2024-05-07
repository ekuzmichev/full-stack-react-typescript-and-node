import { Category } from "./Category";
import { ThreadItem } from "./ThreadItem";

export class Thread {
  constructor(
    public id: string,
    public views: number,
    public title: string,
    public body: string,
    public userName: string,
    public userId: string,
    public points: number, // Total number of likes
    public createdOn: Date,
    public lastModifiedOn: Date,
    public threadItems: ThreadItem[],
    public category: Category
  ) {}
}
