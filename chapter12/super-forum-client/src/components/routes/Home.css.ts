import { style } from "@vanilla-extract/css";
import { screenRootContainer } from "../../App_vanilla.css";
import { GridArea } from "../types/GridArea";

export const homeContainer: string = style([
  screenRootContainer,
  {
    margin: "0 auto",
    maxWidth: 1200,
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
  },
]);

