import { style } from "@vanilla-extract/css";
import { GridArea } from "../../types/GridArea";
import * as theme from "../../../theme.css";

export const container = style({
  minHeight: theme.vars.minScreenHeight,
  gridArea: GridArea.SideBar,
  backgroundColor: "bisque",
  borderRadius: "0.3em",
});
