import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../../styles/themes.css";

export const footer = style({
  background: root.colours.grey,
  fontFamily: root.fonts.body,

  padding: `${root.spacing["4x"]} 0`,
  borderTop: `${root.colours.lightGrey} 1px solid`,
});

export const topFooter = style({
  display: "flex",
  justifyContent: "space-around",
});

export const socialMedia = style({});

globalStyle(`${socialMedia} ul`, {
  display: "flex",
  justifyContent: "space-evenly",
});

globalStyle(`${socialMedia} ul li`, {
  listStyle: "none",
  padding: root.spacing["1x"],
});

globalStyle(`${socialMedia} ul li a`, {
  background: "red",
  borderRadius: "100%",
});

globalStyle(`${topFooter} h5`, {
  color: root.colours.secondary,
  fontWeight: root.fontWeights.extraBold,
  padding: `${root.spacing["2x"]} 0`,
});

globalStyle(`${topFooter} ul li`, {
  listStyle: "none",
});

globalStyle(`${topFooter} ul li a`, {
  textDecoration: "none",
  color: root.colours.secondary,
  fontWeight: root.fontWeights.light,
  fontSize: root.fontSizes["2x"],
  padding: `${root.spacing["1x"]} 0`,
});

globalStyle(`${topFooter} ul li a:hover`, {
  textDecoration: "underline",
});
