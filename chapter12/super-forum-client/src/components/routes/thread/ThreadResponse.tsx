import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { PointsIcon } from "../../common/PointsIcon";
import { RichEditor } from "../../editor/RichEditor";
import { UserNameAndTime } from "./UserNameAndTime";

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
      <div>
        <UserNameAndTime userName={userName} lastModifiedOn={lastModifiedOn} />
        <span style={{ marginLeft: "1em" }}>
          <label>
            {points || 0}
            <PointsIcon icon={faHeart} />
          </label>
        </span>
      </div>
      <div className="thread-body-editor">
        <RichEditor existingBody={body} />
      </div>
    </div>
  );
};
