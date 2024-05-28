import { style } from "@vanilla-extract/css";
import * as theme from "../../../theme.css";
import { GridArea } from "../../types/GridArea";

export const container = style({
  minHeight: theme.vars.minScreenHeight,
  gridArea: GridArea.Content,
  backgroundColor: "blanchedalmond",
});
