import { createTheme } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  minScreenHeight: "1000px",
  borderColor: "gray",
  inputBorderColor: "#e6ebf1",
  smFontSize: "0.95em",
  smMedFontSize: "1.1em",
  proceedColor: "rgb(81, 142, 132)",
  pointColor: "rgb(54, 69, 79)",
  panelBorderThickness: "0.05em",
});
