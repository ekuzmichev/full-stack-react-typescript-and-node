import { style } from "@vanilla-extract/css";
import { GridArea } from "../types/GridArea";
import * as theme from "./../../theme.css";

export const container: string = style({
  margin: "0 auto",
  maxWidth: 1200,
  minHeight: theme.vars.minScreenHeight,
  display: "grid",
  gridTemplateColumns: "0.7fr 0.9fr 1.5fr 0.9fr",
  gridTemplateRows: "2.75rem 3fr",
  gridTemplateAreas: `
    "${GridArea.NavigationBar} ${GridArea.NavigationBar} ${GridArea.NavigationBar} ${GridArea.NavigationBar}"
    "${GridArea.SideBar} ${GridArea.LeftMenu} ${GridArea.Content} ${GridArea.RightMenu}"
  `,
  gap: "0.75rem 0.4rem",
  "@media": {
    "screen and (orientation: portrait) and (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gridTemplateAreas: `
        "${GridArea.NavigationBar}"
        "${GridArea.Content}"
      `,
    },
  },
});
