import { style } from "@vanilla-extract/css";
import * as theme from "./../../../theme.css";

export const container = style([
  {
    display: "flex",
    flexDirection: "row",
    border: `solid ${theme.vars.panelBorderThickness} ${theme.vars.borderColor}`,
    borderRadius: "0.2em",
    backgroundColor: theme.vars.panelColor,
    whiteSpace: "wrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "650px",
  },
]);

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
  width: "90%",
  padding: "0.75em 1em 0.75em 1.2em",
  borderRight: `solid 1px ${theme.vars.borderColor}`,
});

export const body = style({
  marginBottom: "0.5em",
  overflowY: "auto",
  cursor: "pointer",
});

export const footer = style({
  fontSize: theme.vars.smFontSize,
  color: theme.vars.proceedColor,
  fontWeight: "bold",
  wordWrap: "break-word",
  overflow: "auto",
  lineHeight: "10px",
  marginTop: "0.5em",
});

export const usernameHeader = style({
  marginLeft: ".5em",
});

export const question = style({
  marginBottom: ".4em",
});

export const responsesLabel = style({
  marginRight: ".5em",
});

export const title = style({
  marginBottom: ".4em",
});

export const views = style({
  marginRight: ".5em",
});

export const iconLg = style({
  marginLeft: "0.5em",
  width: "2.23em",
});
