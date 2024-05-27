import { style } from "@vanilla-extract/css"
import { GridArea } from "../../types/GridArea"

export const rightMenuContainer = style({
  padding: "0 .75em .5em .75em"
})

export const rightMenu = style({
  gridArea: GridArea.RightMenu,
  backgroundColor: "coral",
});