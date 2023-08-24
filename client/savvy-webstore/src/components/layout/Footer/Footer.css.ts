import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../../styles/themes.css";

export const footer = style({
  background: root.colours.grey,
  fontFamily: root.fonts.body,
  padding: `${root.spacing["4x"]} 0`,
  borderTop: `${root.colours.lightGrey} 1px solid`,
});

export const topFooter = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  padding: `${root.spacing.none} ${root.spacing["4x"]}`,
  width: "80%",
  margin: "auto"
});

export const socialMedia = style({
    marginTop: root.spacing["4x"],
    width: "50%",
});

globalStyle(`${socialMedia} ul`, {
  marginTop: root.spacing["4x"],
  display: "flex",
  justifyContent: "space-evenly",
 
});

globalStyle(`${socialMedia} ul li`, {
  listStyle: "none",
  // padding: root.spacing["1x"],
  fontSize: "2rem",


});

globalStyle(`${socialMedia} ul li a`, {
    // padding: "20rem",
 
  borderRadius: "100%",
});

globalStyle(`${socialMedia} ul li .instagram`, {
   background: " #8a3ab9"
});

globalStyle(`${socialMedia} ul li .facebook`, {
    background: "#4267B2"
 });

 globalStyle(`${socialMedia} ul li .twitter`, {
    background: "#1DA1F2"
 });

globalStyle(`${socialMedia} ul li a svg`, {
    color: root.colours.primary,
    width: "1.5rem",
    height: "1.5rem"
});

globalStyle(`${topFooter} h5`, {
  color: root.colours.secondary,
  fontWeight: root.fontWeights.extraBold,
  padding: `${root.spacing["2x"]} 0`,
  marginTop: root.spacing["4x"]
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

globalStyle(`${bottomFooter} img`, {
    marginTop: root.spacing["4x"],
    width: "13rem",
    marginBottom: '-11px'
})

globalStyle(`${bottomFooter} p`, {
  width: "55%",
  margin: `${root.spacing.none} auto`,
  fontSize: root.fontSizes["2x"],
  paddingBottom: root.spacing["4x"],
  fontWeight: root.fontWeights.regular,
  zIndex: "2"
});

globalStyle(`${bottomFooter} h5`, {
    paddingTop: root.spacing["3x"],
    fontWeight: root.fontWeights.extraBold,
    fontSize: root.fontSizes["1x"]
})
