import { style } from "@vanilla-extract/css";
import * as theme from "./../../theme.css";

export const container = style({
  position: "fixed",
  minWidth: "550px",
  left: "50%",
  top: "4.5em",
  transform: "translate(-50%)",
  border: `solid 0.1em ${theme.vars.borderColor}`,
  borderRadius: "5px",
  backgroundColor: "white",
  padding: "1em 1em 1em 1em",
  zIndex: "1000",
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      minWidth: "60px",
      left: "0.5em",
      right: "0.5em",
      top: "3.5em",
      transform: "translate(0%)",
    },
  },
});
