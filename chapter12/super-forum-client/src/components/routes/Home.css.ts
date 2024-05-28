import { style } from "@vanilla-extract/css";
import { GridArea } from "../types/GridArea";
import * as theme from "./../../theme.css";

export const container: string = style({
  border: `solid 0.1em ${theme.vars.borderColor}`,
  borderRadius: "0.3em",
  margin: "0 auto",
  maxWidth: 1200,
  minHeight: 720,
  display: "grid",
  gridTemplateColumns: "0.7fr 0.9fr 1.5fr 0.9fr",
  gridTemplateRows: "2.75rem 3fr",
  gridTemplateAreas: `
    "${GridArea.Nav} ${GridArea.Nav} ${GridArea.Nav} ${GridArea.Nav}"
    "${GridArea.Sidebar} ${GridArea.LeftMenu} ${GridArea.Content} ${GridArea.RightMenu}"
  `,
  gap: "0.75rem 0.4rem",
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "${GridArea.Nav}"
        "${GridArea.Content}"
      `,
    },
  },
});
