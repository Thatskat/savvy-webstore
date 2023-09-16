import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../../styles/themes.css";

export const header = style({
  padding: `${root.spacing["3x"]} ${root.spacing.none} `,
  fontFamily: root.fonts.body,
  paddingBottom: "0"
});

export const topHeader = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  width: "90%",
  margin: "auto",
  padding: `${root.spacing.none} ${root.spacing["4x"]}`,
});

export const accountLinks = style({
  width: "70%",
});

globalStyle(`${accountLinks} ul`, {
  listStyle: "none",
  display: "flex",
  margin: `${root.spacing["1x"]} auto`,
});

globalStyle(`${accountLinks} ul li`, {
  padding: "0rem 1rem",
});
globalStyle(`${accountLinks} ul li a`, {
  textDecoration: "none",
  color: root.colours.secondary,
  fontSize: root.fontSizes["3x"],
});

globalStyle(`${accountLinks} ul li a svg`, {
  width: "1.3rem",
  height: "1.3rem",
});

export const searchBar = style({});
globalStyle(`${searchBar} label`, {
  display: "none",
});

globalStyle(`${searchBar} input`, {
  borderRadius: "20px",
  border: `${root.colours.lightGrey} 1px solid`,
  background: root.colours.grey,
  color: root.colours.secondary,
  fontFamily: root.fonts.body,
  padding: "8px",
  width: "18rem",
  outline: "none",
});
export const searchIcon = style({
  position: "absolute",
  padding: `${root.spacing["1x"]}`,
});
export const siteLogo = style({
  margin: "auto",
  paddingRight: "45px",
  paddingBottom: root.spacing["2x"],
});
export const bottomHeader = style({
  display: "flex",
  justifyContent: "space-between",
  borderTop: `${root.colours.lightGrey} 1px solid`,
  borderBottom: `${root.colours.lightGrey} 1px solid`,
});
globalStyle(`${bottomHeader} nav ul`, {
  listStyle: "none",
  display: "flex",
  padding: `${root.spacing["2x"]} ${root.spacing["4x"]}`,
});
globalStyle(`${bottomHeader} nav ul li`, {
  padding: ` ${root.spacing.none} ${root.spacing["2x"]}`,
});
globalStyle(`${bottomHeader} nav ul li a`, {
  textDecoration: "none",
  color: root.colours.secondary,
  fontSize: root.fontSizes["3x"],
});
globalStyle(`${bottomHeader} nav ul .textHighlight a`, {
  fontWeight: root.fontWeights.bold,
});

globalStyle(`${bottomHeader} nav ul .textHighlight svg`, {
  width: "1.5rem",
  height: "1.5rem",
  marginRight: root.spacing["1x"],
});
