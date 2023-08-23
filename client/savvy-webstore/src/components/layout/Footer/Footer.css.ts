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
    padding: "20rem",
  background: "red",
  borderRadius: "100%",
});

globalStyle(`${socialMedia} ul li a svg`, {
    color: root.colours.primary,
    width: "2rem",
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

export const bottomFooter = style({
  margin: `${root.spacing["4x"]} 0`,
  textAlign: "center",
  color: root.colours.secondary,
});

globalStyle(`${bottomFooter} p`, {
  width: "60%",
  margin: `${root.spacing["4x"]} auto`,
  padding: root.spacing["4x"],
  fontSize: root.fontSizes["2x"],
  fontWeight: root.fontWeights.regular,
});
