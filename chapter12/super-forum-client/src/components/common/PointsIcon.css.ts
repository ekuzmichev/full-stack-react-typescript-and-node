import { style } from "@vanilla-extract/css";

export const pointsIcon = style({
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      marginLeft: "0.2em",
    },
  },
});
