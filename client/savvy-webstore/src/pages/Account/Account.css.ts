import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const account = style({
  padding: "0px 200px",
  color: root.colours.secondary,
});

globalStyle(`${account} h1`, {
  fontSize: root.fontSizes["8x"],
  marginTop: root.spacing["6x"],
  marginBottom: root.spacing["2x"],
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: root.spacing["9x"],
});
