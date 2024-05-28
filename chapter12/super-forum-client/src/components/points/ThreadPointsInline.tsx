import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import { PointsIcon } from "../common/PointsIcon";
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
        <PointsIcon icon={faHeart} />
      </label>
    </React.Fragment>
  );
};
