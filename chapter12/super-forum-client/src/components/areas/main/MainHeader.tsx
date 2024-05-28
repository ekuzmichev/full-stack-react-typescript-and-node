import { FC } from "react";
import { Category } from "../../../models/Category";
import * as css from "./MainHeader.css";

interface MainHeaderProps {
  category?: Category;
}

export const MainHeader: FC<MainHeaderProps> = ({ category }) => {
  return (
    <div className={css.container}>
      <div className={css.titleBar}>
        <strong>{category?.name || "Placeholder"}</strong>
      </div>
    </div>
  );
};
