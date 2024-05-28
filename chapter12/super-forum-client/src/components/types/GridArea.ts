export const GridArea = {
  NavigationBar: "navigation-bar",
  SideBar: "side-bar",
  LeftMenu: "left-menu",
  Content: "content",
  RightMenu: "right-menu",
} as const;

export type GridArea = (typeof GridArea)[keyof typeof GridArea];
