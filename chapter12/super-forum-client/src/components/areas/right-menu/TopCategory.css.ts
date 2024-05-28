import { style } from "@vanilla-extract/css";
import * as theme from "./../../../theme.css";

export const container = style({
  padding: "0.75em",
  paddingLeft: "0.5em",
  fontSize: theme.vars.smMedFontSize,
});

export const threadContainer = style({
  paddingLeft: "0.2em",
});

export const clickableSpan = style({
  cursor: "pointer",
});
