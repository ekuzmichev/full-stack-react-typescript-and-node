import { style } from "@vanilla-extract/css";
import * as theme from "./theme.css";

export const panel = style({
  display: "flex",
  flexDirection: "row",
  border: `solid ${theme.vars.panelBorderThickness} ${theme.vars.borderColor}`,
  borderRadius: "0.07em",
  backgroundColor: "var(--panel-color)",
  whiteSpace: "wrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});
