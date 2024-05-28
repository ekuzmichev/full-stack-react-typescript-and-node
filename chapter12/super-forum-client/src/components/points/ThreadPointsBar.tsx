import { faHeart, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { PointsIcon } from "../common/PointsIcon";
import * as css from "./ThreadPointsBar.css";

export interface ThreadPointsBarProps {
  points: number;
  responseCount?: number;
}

export const ThreadPointsBar: FC<ThreadPointsBarProps> = ({
  points,
  responseCount,
}) => {
  const { isMobile } = useWindowDimensions();

  if (!isMobile) {
    return (
      <div className={css.points}>
        <div className={css.pointsItem}>
          {points}
          <br />
          <PointsIcon icon={faHeart} />
        </div>
        <div className={css.pointsItem}>
          {responseCount}
          <br />
          <PointsIcon icon={faReplyAll} />
        </div>
      </div>
    );
  }
  return null;
};
