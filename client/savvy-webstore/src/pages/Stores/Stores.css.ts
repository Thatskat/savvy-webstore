import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const stores = style({
  padding: `0 200px`,
  color: root.colours.secondary,
  marginBottom: root.spacing["4x"],
});

globalStyle(`${stores} h1`, {
  textAlign: "center",
  fontSize: root.fontSizes["8x"],
  margin: `${root.spacing["4x"]} 0`,
});

globalStyle(`${stores} label`, {
  display: "none",
});
