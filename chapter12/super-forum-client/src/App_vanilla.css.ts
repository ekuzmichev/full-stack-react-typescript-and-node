import { createVar, style } from "@vanilla-extract/css";

var borderColor = createVar();
var border = createVar();

export const screenRootContainer: string = style({
  vars: {
    borderColor: "gray",
    border: `solid 0.1em ${borderColor}`,
  },
  margin: "0 auto",
  maxWidth: 1200,
  marginBottom: "2em",
  border: border,
  borderRadius: "0.3em",
});
