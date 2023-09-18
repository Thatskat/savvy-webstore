import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const aboutUs = style({
  padding: "0px 200px",
  color: root.colours.secondary,
});

globalStyle(`${aboutUs} h1`, {
  fontSize: root.fontSizes["7x"],
  margin: `${root.spacing["6x"]} 0`,
});
export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
});
