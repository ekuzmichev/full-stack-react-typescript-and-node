import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import * as css from "./PointsIcon.css";

export const PointsIcon: FC<{ icon: IconProp }> = (props) => (
  <FontAwesomeIcon icon={props.icon} className={css.pointsIcon} />
);
