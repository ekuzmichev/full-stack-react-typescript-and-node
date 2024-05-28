import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Category } from "../../../models/Category";
import { Thread } from "../../../models/Thread";
import { getThreadsByCategory } from "../../../services/DataService";
import * as css from "./Main.css";
import { MainHeader } from "./MainHeader";
import { ThreadCard } from "./ThreadCard";

export const Main = () => {
  const { categoryId } = useParams();

  const [category, setCategory] = useState<Category | undefined>();
  const [threadCardJsxElements, setThreadCardJsxElements] = useState<
    JSX.Element[] | null
  >(null);

  useEffect(() => {
    console.log("Category Id:", categoryId);

    if (categoryId && Number(categoryId) > 0) {
      getThreadsByCategory(categoryId).then((threads: Thread[]) => {
        const threadCards: JSX.Element[] = threads.map((thread: Thread) => {
          return <ThreadCard key={`thread-${thread.id}`} thread={thread} />;
        });
        if (!category) {
          setCategory(threads[0].category);
        }
        setThreadCardJsxElements(threadCards);
      });
    }
  }, [categoryId]);

  return (
    <main className={css.container}>
      <MainHeader category={category} />
      <div>{threadCardJsxElements}</div>
    </main>
  );
};
