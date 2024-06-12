import { style } from "@vanilla-extract/css";

export const username = style({
  marginLeft: ".75em",
});

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
  marginTop: "0.5em",
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

export const resultMessage = style({
  marginTop: ".5em",
});

export const actionBtn = style({
  backgroundColor: "skyblue",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});

export const threadSectionDivider = style({
  marginTop: "1em",
  marginBottom: "1em",
})
