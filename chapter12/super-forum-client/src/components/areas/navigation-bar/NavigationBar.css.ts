import { style } from "@vanilla-extract/css";
import { GridArea } from "../../types/GridArea";

export const container: string = style({
  gridArea: GridArea.NavigationBar,
  backgroundColor: "aqua",
  borderRadius: "0.3em",
});

export const content = style({
  padding: "0.75em 1em",
});

export const menuIcon = style({
  marginRight: "1em",
});
