import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../../styles/themes.css";

export const header = style({
  padding: `${root.spacing["3x"]} ${root.spacing.none} `,
  fontFamily: root.fonts.body,
});

export const topHeader = style({
  display: "grid",
  gridTemplateColumns: "1rem 2rem",
  borderBottom: `${root.colours.lightGrey} 1px solid`,
});

export const accountLinks = style({});

globalStyle(`${accountLinks} ul`, {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-evenly",
});

globalStyle(`${accountLinks} ul li`, {
  padding: "0rem 1rem",
});
globalStyle(`${accountLinks} ul li a`, {
  textDecoration: "none",
  color: root.colours.secondary,
  fontSize: root.fontSizes["3x"],
});

export const searchBar = style({});
globalStyle(`${searchBar} label`, {
  display: "none"
});

globalStyle(`${searchBar} input`, {
  borderRadius: "20px",
  border: `${root.colours.lightGrey} 1px solid`,
  background: root.colours.grey,
  color: root.colours.secondary,
  fontFamily: root.fonts.body,
  padding: "8px",
  width: "20rem",
  outline: "none"
});
export const bottomHeader = style({
  display: "flex",
  justifyContent: "space-between",
});
