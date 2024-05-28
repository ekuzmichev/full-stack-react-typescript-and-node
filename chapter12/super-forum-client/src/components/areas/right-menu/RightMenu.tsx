import { Dictionary } from "lodash";
import groupBy from "lodash/groupBy";
import { useEffect, useState } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { CategoryThread } from "../../../models/CategoryThread";
import { getTopCategories } from "../../../services/DataService";
import * as css from "./RightMenu.css";
import { TopCategory } from "./TopCategory";

export const RightMenu = () => {
  const { isMobile } = useWindowDimensions();

  const [topCategories, setTopCategories] = useState<
    JSX.Element[] | undefined
  >();

  useEffect(() => {
    getTopCategories().then((categoryThreads: CategoryThread[]) => {
      const categoryThreadsByCategory: Dictionary<CategoryThread[]> = groupBy(
        categoryThreads,
        "category"
      );
      const topElements: JSX.Element[] = [];
      for (let category in categoryThreadsByCategory) {
        const categoryThreads: CategoryThread[] =
          categoryThreadsByCategory[category];
        topElements.push(
          <TopCategory key={category} topCategories={categoryThreads} />
        );
      }
      setTopCategories(topElements);
    });
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <div className={`${css.rightMenu} ${css.rightMenuContainer}`}>
      {topCategories}
    </div>
  );
};
