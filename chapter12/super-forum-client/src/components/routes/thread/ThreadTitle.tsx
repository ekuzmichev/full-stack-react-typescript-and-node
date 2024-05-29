import React, { FC } from "react";
import * as css from "./ThreadTitle.css";

interface ThreadTitleProps {
  title?: string;
}

export const ThreadTitle: FC<ThreadTitleProps> = ({ title }) => {
  const onTitleInputChange = (
    e: React.InputHTMLAttributes<HTMLInputElement>
  ) => {};

  return (
    <div className={css.container}>
      <strong>Title</strong>
      <div className={css.field}>
        <input
          type="text"
          value={title || ""}
          onChange={onTitleInputChange}
          placeholder="Title"
        />
      </div>
    </div>
  );
};
