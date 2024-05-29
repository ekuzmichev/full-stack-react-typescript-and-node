import { FC } from "react";
import { DateTimeUtils } from "../../../common/DateTimeUtils";
import * as css from "./UserNameAndTime.css";

interface UserNameAndTimeProps {
  userName?: string;
  lastModifiedOn?: Date;
}

export const UserNameAndTime: FC<UserNameAndTimeProps> = ({
  userName,
  lastModifiedOn,
}) => {
  return (
    <span>
      <strong>{userName}</strong>
      <label className={css.label}>
        {lastModifiedOn
          ? DateTimeUtils.getTimePastIfLessThanDay(lastModifiedOn)
          : ""}
      </label>
    </span>
  );
};
