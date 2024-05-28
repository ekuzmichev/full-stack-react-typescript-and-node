import { FC, useEffect, useState } from "react";
import { CategoryThread } from "../../../models/CategoryThread";
import * as css from "./TopCategory.css";

interface TopCategoryProps {
  topCategories: CategoryThread[];
}

export const TopCategory: FC<TopCategoryProps> = ({ topCategories }) => {
  const [threads, setThreads] = useState<JSX.Element | undefined>();

  useEffect(() => {
    if (topCategories && topCategories.length > 0) {
      const newThreadElements = topCategories.map((top) => (
        <li key={top.threadId}>
          <span className={css.clickableSpan}>{top.title}</span>
        </li>
      ));

      setThreads(<ul className={css.threadContainer}>{newThreadElements}</ul>);
    }
  }, [topCategories]);

  return (
    <div className={css.container}>
      <div>
        <strong>{topCategories[0].category}</strong>
      </div>
      {threads}
    </div>
  );
};
