import { FC } from "react";
import * as css from "./ThreadHeader.css";
import { UserNameAndTime } from "./UserNameAndTime";

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
    <div className={css.container}>
      <h3>{title}</h3>
      <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
    </div>
  );
};
