import { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Category } from "../../../models/Category";
import { getThreadsByCategory } from "../../../services/DataService";
import { ThreadCard } from "./ThreadCard";
import { MainHeader } from "./MainHeader";
import { Thread } from "../../../models/Thread";

export const Main = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState<Category | undefined>();
  const [threadCards, setThreadCards] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    console.log("Category Id:", categoryId);

    if (categoryId && Number(categoryId) > 0) {
      getThreadsByCategory(categoryId).then((threads: Thread[]) => {
        const cards: JSX.Element[] = threads.map((thread: Thread) => {
          return <ThreadCard key={`thread-${thread.id}`} thread={thread} />;
        });
        if (!category) {
          setCategory(threads[0].category);
        }
        setThreadCards(cards);
      });
    }
  }, [categoryId]);

  return (
    <main className="content">
      <MainHeader category={category} />
      <div>{threadCards}</div>
    </main>
  );
};
