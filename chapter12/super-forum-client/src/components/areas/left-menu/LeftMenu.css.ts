import { style } from "@vanilla-extract/css";
import { GridArea } from "../../types/GridArea";

export const leftMenu: string = style({
    gridArea: GridArea.LeftMenu,
    backgroundColor: "skyblue",
})