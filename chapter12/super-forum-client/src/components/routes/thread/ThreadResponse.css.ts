import { style } from "@vanilla-extract/css";
import * as theme from "./../../../theme.css";

export const threadBodyEditor = style({
  marginTop: "0.5em",
  border: `solid 1px ${theme.vars.proceedColor}`,
  padding: "0.5em 1em 0.5em 1em",
});

export const userInfo = style({
  display: "flex",
  flexDirection: "row",
  gap: "16px",
});

export const points = style({
  display: "flex",
  flexDirection: "row",
  gap: "3px",
  alignItems: "center",
});
