import { style } from "@vanilla-extract/css";

export const container = style({
  margin: "0 auto",
  maxWidth: "1200px",
});

export const contentContainer = style({
  marginTop: "1em",
  marginLeft: "0.75em",
  marginRight: "0.75em",
});

export const password = style({
  width: "50%",
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      width: "100%",
    },
  },
});

export const link = style({
  overflowY: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

export const postings = style({
  marginTop: "1em",
});
