import { style } from "@vanilla-extract/css";
import * as theme from "./../../../theme.css";

export const container = style({
  padding: "0.5em 0.75em 0.5em 0.75em",
  marginBottom: "0.75em",
  backgroundColor: "mintcream",
  border: `solid 1px ${theme.vars.borderColor}`,
  borderRadius: "0.3em 0.3em 0 0",
});

export const titleBar = style({
  marginBottom: "0.4em",
  paddingBottom: "0.25em !important",
  borderBottom: `3px solid ${theme.vars.inputBorderColor}`,
});
