import { style } from "@vanilla-extract/css";
import { GridArea } from "../../types/GridArea";

export const navigation: string = style({
  gridArea: GridArea.Nav,
});

export const nav = style({
  backgroundColor: "aqua",
  paddingTop: "0.75em",
  paddingBottom: "0.75em",
  paddingLeft: "1em",
  paddingRight: "1em",
});

export const navMobileMenu = style({
  marginRight: "1em",
});
