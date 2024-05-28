import { style } from "@vanilla-extract/css";
import { GridArea } from "../../types/GridArea";

export const container: string = style({
  gridArea: GridArea.LeftMenu,
  backgroundColor: "skyblue",
});
