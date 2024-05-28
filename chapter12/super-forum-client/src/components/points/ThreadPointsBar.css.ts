import { style } from "@vanilla-extract/css";
import * as theme from "./../../theme.css"

export const points = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0.5em",
});

export const pointsItem = style({
  color: theme.vars.pointColor,
  fontSize: theme.vars.smMedFontSize,
  textAlign: "center",
});
