import { createGlobalTheme, globalStyle } from "@vanilla-extract/css";

export const vars = createGlobalTheme("#root", {
  minScreenHeight: "1000px",
  borderColor: "gray",
  inputBorderColor: "#e6ebf1",
  smFontSize: "0.95em",
  smMedFontSize: "1.1em",
  proceedColor: "rgb(81, 142, 132)",
  pointColor: "rgb(54, 69, 79)",
  panelBorderThickness: "0.05em",
  panelColor: "ghostwhite",
});

globalStyle("body", {
  margin: "0",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("code", {
  fontFamily:
    'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
});

globalStyle("ul", {
  listStyleType: "none",
});

globalStyle("li", {
  marginBottom: "1em",
});

globalStyle("hr", {
  width: "100%",
  border: "solid 2px rgba(115, 136, 181, 0.35)",
});
