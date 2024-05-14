import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { ThreadPointsBarProps } from "./ThreadPointsBar";

export const ThreadPointsInline: FC<ThreadPointsBarProps> = ({
  points,
  responseCount,
}) => {
  return (
    <React.Fragment>
      <label
        style={{
          marginRight: ".75em",
          marginTop: ".25em",
        }}
      >
        {points || 0}
        <FontAwesomeIcon
          icon={faHeart}
          className="points-icon"
          style={{
            marginLeft: ".2em",
          }}
        />
      </label>
    </React.Fragment>
  );
};
