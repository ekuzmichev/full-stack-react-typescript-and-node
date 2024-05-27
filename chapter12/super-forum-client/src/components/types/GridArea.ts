export const GridArea = {
  Nav: "nav",
  Sidebar: "sidebar",
  LeftMenu: "left-menu",
  Content: "content",
  RightMenu: "right-menu",
} as const;

export type GridArea = (typeof GridArea)[keyof typeof GridArea];
