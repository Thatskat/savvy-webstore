import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const header = style({
  fontSize: root.fontSizes["7x"],
  background:
    "url('/homePageAssets/home-header.webp') no-repeat center top",
  height: "77vh",
  backgroundSize: "cover",
  marginBottom: "90px",
});

globalStyle(`${header} h1`, {
  width: "70%",
  textTransform: "uppercase",
  textShadow: `2px 4px 4px ${root.colours.lightGrey}`,
  color: root.colours.primary,
  padding: `${root.spacing["8x"]} 200px`,
});

globalStyle(`${header} Button`, {
margin: `${root.spacing["3x"]} 200px`
});

export const overviewCategories = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  margin: `${root.spacing["8x"]} auto`,
  padding: `0 200px`,
  textAlign: "center",
  marginBottom: "90px",
});

export const headingH2 = style({
  color: "#2C4259",
  fontSize: root.fontSizes["7x"],
  textTransform: "uppercase",
  padding: `${root.spacing["3x"]} 0`,
});

export const byCategory = style({
  padding: "0 200px",
  marginBottom: "90px",
});

globalStyle(`${byCategory} h2`, {
  borderBottom: `solid 3px ${root.colours.grey} `,
});

globalStyle(`${byCategory} .categoryCollection`, {
  margin: `${root.spacing["6x"]} 0`,
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
});
globalStyle(`${byCategory} .categoryCollection a`, {
  textDecoration: "none",
});
globalStyle(`${byCategory} .categoryCollection h4`, {
  textTransform: "uppercase",
  color: "#2C4259",
  textAlign: "center",
});
globalStyle(`${byCategory} .categoryCollection img`, {
  width: "13rem",
  borderRadius: 10,
});

export const catchPhrase = style({
  padding: `0 200px`,
  margin: `90px 0`,
});

globalStyle(`${catchPhrase} img`, {
  width: "10rem",
  textAlign: "center",
  marginLeft: `30rem`,
  marginBottom: "-2rem",
});

globalStyle(`${catchPhrase} h2`, {
  textAlign: "center",
});
globalStyle(`${catchPhrase} p`, {
  borderBottom: `solid 3px ${root.colours.grey} `,
  textAlign: "center",
  color: root.colours.secondary,
  fontWeight: root.fontWeights.bold,
  paddingBottom: "2rem",
});

export const reviewHighlight = style({
  background: "url('/homePageAssets/home-subHeader.webp') center blue",
  backgroundSize: "cover",
  height: "65vh",
});

globalStyle(`${reviewHighlight} div`, {
  background: root.colours.secondary,
  opacity: "0.7",
  width: "40%",
  margin: `0 200px`,
  padding: root.spacing["4x"],
  borderRadius: 10,
  display: "absolute",
  top: "10rem"
});

globalStyle(`${reviewHighlight} h3`, {
  fontSize: root.fontSizes["7x"],
  color: root.colours.primary,
  opacity: "1 !important",
});
globalStyle(`${reviewHighlight} p`, {
  color: root.colours.lightBrand,
  opacity: "1 !important",
});