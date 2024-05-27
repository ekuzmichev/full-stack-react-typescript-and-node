import { style } from "@vanilla-extract/css";
import { GridArea } from "../../types/GridArea";
import * as theme from "../../../theme.css";

export const sidebar = style({
  minHeight: theme.vars.minScreenHeight,
  gridArea: GridArea.Sidebar,
  backgroundColor: "aliceblue",
});
