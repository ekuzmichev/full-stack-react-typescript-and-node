import { FC } from "react";
import { RichEditor } from "../../editor/RichEditor";
import * as css from "./ThreadBody.css";

interface ThreadBodyProps {
  body?: string;
}

export const ThreadBody: FC<ThreadBodyProps> = ({ body }) => {
  return (
    <div className={css.container}>
      <strong>Body</strong>
      <div className={css.editor}>
        <RichEditor existingBody={body} />
      </div>
    </div>
  );
};
