import { globalStyle, style } from "@vanilla-extract/css";
import * as theme from "./../../theme.css";

export const editor = style({
  minHeight: "5em",
});

globalStyle("code", {
  backgroundColor: "#eee",
  padding: "0.45em",
});

globalStyle("blockquote", {
  borderLeft: `0.5em solid ${theme.vars.borderColor}`,
  marginLeft: "0",
  marginRight: "0",
  paddingLeft: "1em",
  color: theme.vars.pointColor,
  fontStyle: "italic",
});
