import { style } from "@vanilla-extract/css";
import * as theme from "./../../../theme.css";

export const container = style({
  marginTop: "1em",
});

export const editor = style({
  marginTop: "0.5em",
  border: `solid 1px ${theme.vars.proceedColor}`,
  padding: "0.5em 1em 0.5em 1em",
});
