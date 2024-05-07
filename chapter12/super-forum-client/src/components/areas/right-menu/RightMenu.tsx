import { Dictionary } from "lodash";
import groupBy from "lodash/groupBy";
import { useEffect, useState } from "react";
import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { CategoryThread } from "../../../models/CategoryThread";
import { getTopCategories } from "../../../services/DataService";
import "./RightMenu.css";
import { TopCategory } from "./TopCategory";

export const RightMenu = () => {
  const { width } = useWindowDimensions();
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

  if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
    return null;
  }

  return <div className="right-menu right-menu-container">{topCategories}</div>;
};
