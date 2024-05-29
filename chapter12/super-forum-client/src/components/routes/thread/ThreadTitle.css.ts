import { style } from "@vanilla-extract/css";

export const field = style({
  width: "100%",
  height: "56px",
  borderRadius: "4px",
  position: "relative",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  transition: "0.3s all",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.45)",
      boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.05)",
    },
  },
});
