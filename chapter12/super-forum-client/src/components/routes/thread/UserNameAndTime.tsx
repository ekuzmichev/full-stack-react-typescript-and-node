import { FC } from "react";
import { DateTimeUtils } from "../../../common/DateTimeUtils";

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
      <label style={{ marginLeft: "1em" }}>
        {lastModifiedOn
          ? DateTimeUtils.getTimePastIfLessThanDay(lastModifiedOn)
          : ""}
      </label>
    </span>
  );
};
