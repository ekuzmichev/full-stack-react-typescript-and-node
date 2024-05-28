import { style } from "@vanilla-extract/css";
import { GridArea } from "../../types/GridArea";

export const container = style({
  gridArea: GridArea.RightMenu,
  backgroundColor: "coral",
  padding: "0 .75em .5em .75em",
  borderRadius: "0.3em",
});
