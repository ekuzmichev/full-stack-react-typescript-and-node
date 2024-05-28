import { faHeart, faReplyAll } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

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
      <div className="threadcard-points">
        <div className="threadcard-points-item">
          {points}
          <br />
          <FontAwesomeIcon icon={faHeart} className="points-icon" />
        </div>
        <div className="threadcard-points-item">
          {responseCount}
          <br />
          <FontAwesomeIcon icon={faReplyAll} className="points-icon" />
        </div>
      </div>
    );
  }
  return null;
};
