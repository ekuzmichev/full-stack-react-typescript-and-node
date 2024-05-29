import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { PointsIcon } from "../../common/PointsIcon";
import { RichEditor } from "../../editor/RichEditor";
import { UserNameAndTime } from "./UserNameAndTime";
import * as css from "./ThreadResponse.css"

interface ThreadResponseProps {
  body?: string;
  userName?: string;
  lastModifiedOn?: Date;
  points: number;
}

export const ThreadResponse: FC<ThreadResponseProps> = ({
  body,
  userName,
  lastModifiedOn,
  points,
}) => {
  return (
    <div>
      <div className={css.userInfo}>
        <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
        <span>
          <label className={css.points}>
            {points || 0}
            <PointsIcon icon={faHeart} />
          </label>
        </span>
      </div>
      <div className={css.threadBodyEditor}>
        <RichEditor existingBody={body} />
      </div>
    </div>
  );
};
