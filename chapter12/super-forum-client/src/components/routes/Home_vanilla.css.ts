import { style } from "@vanilla-extract/css";

const GridArea = {
  Nav: "nav",
  Sidebar: "sidebar",
  LeftMenu: "left-menu",
  Content: "content",
  RightMenu: "right-menu",
} as const;

type GridArea = (typeof GridArea)[keyof typeof GridArea];

export const homeContainer: string = style({
  margin: "0 auto",
  maxWidth: 1200,
  display: "grid",
  gridTemplateColumns: "0.7fr 0.9fr 1.5fr 0.9fr",
  gridTemplateRows: "2.75rem 3fr",
  gridTemplateAreas: `
    "${GridArea.Nav} ${GridArea.Nav} ${GridArea.Nav} ${GridArea.Nav}"
    "${GridArea.Sidebar} ${GridArea.LeftMenu} ${GridArea.Content} ${GridArea.RightMenu}"
  `,
  gap: "0.75rem 0.4rem",
});

export const navigation: string = style({
  gridArea: GridArea.Nav,
});
