import React, { FC } from "react";

interface ThreadTitleProps {
  title?: string;
}

export const ThreadTitle: FC<ThreadTitleProps> = ({ title }) => {
  const onTitleInputChange = (e: React.InputHTMLAttributes<HTMLInputElement>) => {};

  return (
    <div className="thread-title-container">
      <strong>Title</strong>
      <div className="field">
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
