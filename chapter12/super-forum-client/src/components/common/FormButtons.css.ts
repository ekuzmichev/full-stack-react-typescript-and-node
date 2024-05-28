import { style } from "@vanilla-extract/css";

export const formButtons = style({
  marginTop: "0.25em",
  display: "grid",
  gridTemplateColumns: "0.7fr 1.3fr",
  gridAutoFlow: "column",
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
    }
  }
});

export const formButtonsSm = style({
  gridTemplateColumns: "1fr",
});

export const formBtnLeft = style({
  gridColumn: 1,
});

export const formBtnRight = style({
  gridColumn: 2,
  marginLeft: "2em",
  paddingTop: "0.8em",
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      gridColumn: 1,
      marginLeft: "0.5em",
      paddingTop: "0.5em",
    },
  },
});

export const actionBtn = style({
  backgroundColor: "skyblue",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: ".5em"
});

export const cancelBtn = style({
  backgroundColor: "white",
  color: "gray",
  padding: "14px 20px",
  margin: "8px 0",
  border: "solid 1px gray",
  borderRadius: "4px",
  cursor: "pointer",
  marginLeft: ".5em"
});
