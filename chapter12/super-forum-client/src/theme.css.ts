import {
  createGlobalTheme,
  createTheme,
  createVar,
  style,
} from "@vanilla-extract/css";

// TODO: Set up a theme for the App
export const [themeClass, vars] = createTheme({
  minScreenHeight: "1000px",
  borderColor: "gray",
  inputBorderColor: "#e6ebf1",
  /**
 * --min-screen-height: 1000px;

  --border-color: gray;
  --border: solid 0.1em var(--border-color);
  --input-border-color: #e6ebf1;
  --input-border: solid 3px var(--input-border-color);
  --proceed-color: rgb(81, 142, 132);
  --point-color: rgb(54, 69, 79);
  --section-divider-color: rgba(115, 136, 181, 0.35);

  --panel-border-thickness: 0.05em;
  --panel-color: white;

  --sm-font-size: 0.95em;
  --sm-med-font-size: 1.1em;
 */
});

// const borderColor = createVar();
// const inputBorderColor = createVar();

// const globalVars = style({
//   vars: {
//     [borderColor]: "gray",
//     [inputBorderColor]: "#e6ebf1",
//   },
// });

// const rootVars = createGlobalTheme("#root", {
//   border: `solid 0.1em ${borderColor}`,
//   minScreenHeight: "1000px",
//   inputBorder: `solid 3px ${inputBorderColor}`,
//   proceedColor: "rgb(81, 142, 132)",
//   pointColor: "rgb(54, 69, 79)",
//   sectionDividerColor: "rgba(115, 136, 181, 0.35)",

//   // --panel-border-thickness: 0.05em,
//   // --panel-color: white,

//   // --sm-font-size: 0.95em,
//   // --sm-med-font-size: 1.1em,
// });
