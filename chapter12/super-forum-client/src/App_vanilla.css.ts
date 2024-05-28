import { createVar, style } from "@vanilla-extract/css";
import * as theme from "./theme.css";

const borderColor = createVar();
const border = createVar();

export const screenRootContainer: string = style({
  vars: {
    [borderColor]: "gray",
    [border]: `solid 0.1em ${borderColor}`,
  },
  margin: "0 auto",
  maxWidth: 1200,
  marginBottom: "2em",
  border: border,
  borderRadius: "0.3em",
});

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
