import { Category } from "../models/Category";
import { CategoryThread } from "../models/CategoryThread";
import { Thread } from "../models/Thread";

const TIMEOUT: number = 2000;

const CATEGORIES: Category[] = [
  { id: "1", name: "Programming" },
  { id: "2", name: "Cooking" },
  { id: "3", name: "Sports" },
  { id: "4", name: "Entertainment" },
  { id: "5", name: "Travel" },
];

const LOREM_IPSUM: string =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const THREAD_1: Thread = {
  id: "1",
  views: 22,
  title: "Thread 1",
  body: LOREM_IPSUM,
  userName: "dave",
  userId: "1",
  points: 11,
  createdOn: new Date(),
  lastModifiedOn: new Date(),
  threadItems: [
    {
      id: "1",
      views: 22,
      points: 2,
      body: "ThreadItem 1",
      userName: "jon",
      userId: "2",
      createdOn: new Date(),
      threadId: "1",
    },
    {
      id: "2",
      views: 11,
      points: 14,
      body: "ThreadItem 2",
      userName: "linda",
      userId: "4",
      createdOn: new Date(),
      threadId: "1",
    },
  ],
  category: { id: "1", name: "Programming" },
};

const THREAD_2: Thread = {
  id: "2",
  views: 2,
  title: "Thread 2",
  body: LOREM_IPSUM,
  userName: "tim",
  userId: "2",
  points: 55,
  createdOn: new Date(),
  lastModifiedOn: new Date(),
  threadItems: [
    {
      id: "1",
      views: 22,
      points: 2,
      body: "ThreadItem 1",
      userName: "jon",
      userId: "2",
      createdOn: new Date(),
      threadId: "2",
    },
  ],
  category: { id: "1", name: "Programming" },
};

const THREADS: Thread[] = [THREAD_1, THREAD_2];

const CATEGORY_THREADS: CategoryThread[] = [
  {
    threadId: "1",
    category: "Programming",
    title: "How can I learn JavaScript",
  },
  { threadId: "2", category: "Programming", title: "How can I learn Node" },
  { threadId: "3", category: "Programming", title: "How can I learn React" },
  {
    threadId: "4",
    category: "Cooking",
    title: "How do I learn French cuisine?",
  },
  {
    threadId: "5",
    category: "Cooking",
    title: "How do I learn Italian cuisine?",
  },
  {
    threadId: "6",
    category: "Sports",
    title: "How can I learn to play Soccer",
  },
  {
    threadId: "7",
    category: "Sports",
    title: "How can I learn to play Basketball",
  },
  {
    threadId: "8",
    category: "Sports",
    title: "How can I learn to play Baseball",
  },
];

export const getCategories = async (): Promise<Category[]> =>
  new Promise<Category[]>((resolve) => {
    setTimeout(() => {
      resolve(CATEGORIES);
    }, TIMEOUT);
  });

export const getThreadsByCategory = async (
  categoryId: string
): Promise<Thread[]> =>
  new Promise<Thread[]>((resolve) => {
    setTimeout(() => {
      resolve(THREADS);
    }, TIMEOUT);
  });

export const getTopCategories = async (): Promise<CategoryThread[]> =>
  new Promise<CategoryThread[]>((resolve) => {
    setTimeout(() => {
      resolve(CATEGORY_THREADS);
    }, TIMEOUT);
  });

export const getThreadById = async (threadId: string): Promise<Thread> =>
  new Promise<Thread>((resolve) => {
    setTimeout(() => {
      resolve(THREAD_1);
    }, TIMEOUT);
  });

export const getUserThreads = async (userId: string): Promise<Thread[]> =>
  new Promise<Thread[]>((resolve) => {
    setTimeout(() => {
      resolve(THREADS);
    }, TIMEOUT);
  });
