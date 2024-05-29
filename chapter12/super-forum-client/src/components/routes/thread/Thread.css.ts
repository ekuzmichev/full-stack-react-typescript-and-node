import { style } from "@vanilla-extract/css";
import * as theme from "./../../../theme.css"

export const contentContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr 4em",
  gridTemplateRows: "1fr auto",
  marginTop: "0.75em",
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const contentPostContainer = style({
  gridColumn: "1",
  gridRow: "1",
  marginLeft: "1em",
  marginRight: "1em",
});

export const contentPointsContainer = style({
  display: "flex",
  gridColumn: "2",
  gridRow: "1",
  border: `solid 1px ${theme.vars.borderColor}`,
  marginRight: "1em",
  paddingBottom: "1em",
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const contentResponseContainer = style({
  gridColumn: "1",
  gridRow: "2",
  marginLeft: "1em",
  marginRight: "1em",
});

export const sectionDivider = style({
  marginTop: "1em",
  marginBottom: "1em",
});
