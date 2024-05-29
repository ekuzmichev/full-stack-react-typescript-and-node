import { FC } from "react";
import { UserNameAndTime } from "./UserNameAndTime";
import * as css from "./ThreadHeader.css"

interface ThreadHeaderProps {
  userName?: string;
  lastModifiedOn: Date;
  title?: string;
}

export const ThreadHeader: FC<ThreadHeaderProps> = ({
  userName,
  lastModifiedOn,
  title,
}) => {
  return (
    <div className={css.threadHeaderContainer}>
      <h3>{title}</h3>
      <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
    </div>
  );
};
