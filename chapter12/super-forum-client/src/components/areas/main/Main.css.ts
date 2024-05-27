import { style } from "@vanilla-extract/css";
import * as theme from "../../../theme.css";
import { GridArea } from "../../types/GridArea";

export const content = style({
  minHeight: theme.vars.minScreenHeight,
  gridArea: GridArea.Content,
  backgroundColor: "blanchedalmond",
});
