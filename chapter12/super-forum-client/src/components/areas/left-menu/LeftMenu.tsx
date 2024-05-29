import { useEffect, useState } from "react";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { Category } from "../../../models/Category";
import { getCategories } from "../../../services/DataService";
import * as css from "./LeftMenu.css";

export const LeftMenu = () => {
  const { isMobile } = useWindowDimensions();

  const [categoriesJsxElement, setCategoriesJsxElement] =
    useState<JSX.Element | null>(null);

  useEffect(() => {
    getCategories()
      .then((categories: Category[]) => {
        const categoryListItemElements: JSX.Element[] = categories.map(
          (category: Category) => <li key={category.id}>{category.name}</li>
        );
        setCategoriesJsxElement(<ul>{categoryListItemElements}</ul>);
      })
      .catch((err) => console.log("Error:", err));
  }, []);

  if (isMobile) {
    return null;
  }

  return <div className={css.container}>{categoriesJsxElement}</div>;
};
