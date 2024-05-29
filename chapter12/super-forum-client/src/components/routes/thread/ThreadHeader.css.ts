import { style } from "@vanilla-extract/css";
import * as theme from "./../../../theme.css";

export const container = style({
  borderBottom: `solid 3px ${theme.vars.inputBorderColor}`,
  paddingBottom: "0.75em",
});
