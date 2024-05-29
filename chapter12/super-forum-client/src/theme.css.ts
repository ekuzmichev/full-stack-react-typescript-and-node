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

globalStyle(`input[type="text"], input[type="password"], select`, {
  width: "100%",
  padding: "12px 20px",
  margin: "8px 0",
  display: "inline-block",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
});

globalStyle(`input[type="submit"]`, {
  width: "100%",
  backgroundColor: "#4caf50",
  color: "white",
  padding: "14px 20px",
  margin: "8px 0",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
});

globalStyle(`input[type="submit"]:hover`, {
  backgroundColor: "#45a049",
});
