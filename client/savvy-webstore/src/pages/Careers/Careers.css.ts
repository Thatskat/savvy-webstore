import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const careersPage = style({
  padding: "0px 200px",
  color: root.colours.secondary,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: root.spacing["9x"],
});

globalStyle(`${grid} .generalInfo`, {
  width: "120%",
});

globalStyle(`${grid} .generalInfo h1`, {
  fontSize: root.fontSizes["8x"],
  marginTop: root.spacing["6x"],
  marginBottom: root.spacing["2x"],
});
globalStyle(`${grid} .generalInfo p`, {
  fontSize: root.fontSizes["2x"],
});
globalStyle(`${grid} .generalInfo .staffProfiles`, {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
});
globalStyle(`${grid} .generalInfo .staffProfiles img`, {
  borderRadius: "100%",
  width: "4rem",
});

export const formBox = style({
  background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["5x"],
  margin: `${root.spacing["4x"]} auto`,
  width: "70%",
});
