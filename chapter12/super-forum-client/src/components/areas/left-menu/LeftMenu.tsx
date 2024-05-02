import { useEffect, useState } from "react";
import { MIN_DESKTOP_WINDOW_WIDTH } from "../../../constants";
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import { getCategories } from "../../../services/DataService";
import Category from "../../../models/Category";

const LeftMenu = () => {
  const { width } = useWindowDimensions();

  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  useEffect(() => {
    getCategories()
      .then((categories: Category[]) => {
        const categoryListItems: JSX.Element[] = categories.map((category) => {
          return <li key={category.id}>{category.name}</li>;
        });
        setCategories(<ul className="category">{categoryListItems}</ul>);
      })
      .catch((err) => console.log(err));
  }, []);

  if (width <= MIN_DESKTOP_WINDOW_WIDTH) {
    return null;
  }

  return <div className="left-menu">{categories}</div>;
};

export default LeftMenu;
