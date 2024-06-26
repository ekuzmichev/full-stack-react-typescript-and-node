import { FC } from "react";
import DropDown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import * as css from "./ThreadCategory.css";

interface ThreadCategoryProps {
  categoryName?: string;
}

export const ThreadCategory: FC<ThreadCategoryProps> = ({ categoryName }) => {
  const categoryOptions: Option[] = [
    {
      value: "1",
      label: "Programming",
    },
    {
      value: "2",
      label: "Cooking",
    },
  ];

  const defaultCategoryOption: Option = categoryOptions[0];

  const onDropDownChange = (categoryOption: Option) => {
    console.log("Category option:", categoryOption);
  };

  return (
    <div className={css.container}>
      <strong>{categoryName}</strong>
      <DropDown
        className={css.dropdown}
        options={categoryOptions}
        onChange={onDropDownChange}
        value={defaultCategoryOption}
        placeholder="Select a category"
      />
    </div>
  );
};
