import { style } from "@vanilla-extract/css";
import * as theme from "./../../../theme.css";

export const container = style({
  padding: "0.5em 0.75em 0.5em 0.75em",
  marginTop: "0.18em",
  marginBottom: "0.75em",
  backgroundColor: "white",
  border: `solid 1px ${theme.vars.borderColor}`,
});

export const titleBar = style({
  marginBottom: "0.4em",
  paddingBottom: "0.25em !important",
  borderBottom: `3px solid ${theme.vars.inputBorderColor}`,
});
