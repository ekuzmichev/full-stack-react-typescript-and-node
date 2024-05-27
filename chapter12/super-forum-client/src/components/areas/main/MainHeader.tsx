import { FC } from "react";
import { Category } from "../../../models/Category";
import * as css from "./MainHeader.css";

interface MainHeaderProps {
  category?: Category;
}

export const MainHeader: FC<MainHeaderProps> = ({ category }) => {
  return (
    <div className={css.mainHeader}>
      <div
        className={css.titleBar}
        style={{ marginBottom: ".25em", paddingBottom: "0" }}
      >
        <strong>{category?.name || "Placeholder"}</strong>
      </div>
    </div>
  );
};
