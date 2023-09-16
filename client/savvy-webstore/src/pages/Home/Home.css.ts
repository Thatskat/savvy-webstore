import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const header = style({
  fontSize: root.fontSizes["7x"],
  background:
    "url('https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
    height: "80vh"
});

globalStyle(`${header} h1`, {
  width: "60%",
  textTransform: "uppercase",
  textShadow: `2px 4px 4px ${root.colours.lightGrey}`,
  color: root.colours.primary,
});

export const overviewCategories = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  margin: `${root.spacing["4x"]}`
});

export const headingH2 = style({
  color: "#2C4259",
  fontSize: root.fontSizes["7x"],
  textTransform: "uppercase",
  padding: `${root.spacing["3x"]} 0`,
});

export const byCategory = style({});

globalStyle(`${byCategory} h2`, {
  borderBottom: `solid 3px ${root.colours.grey} `,
});

globalStyle(`${byCategory} .categoryCollection`, {
  margin: `${root.spacing["4cx"]} 0`,
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

export const catchPhrase = style({});

globalStyle(`${catchPhrase} p`, {
  borderBottom: `solid 3px ${root.colours.grey} `,
});

export const reviewHighlight = style({});

globalStyle(`${reviewHighlight} div`, {
  background: root.colours.brand,
  width: "40%",
});

globalStyle(`${reviewHighlight} h3`, {
  fontSize: root.fontSizes["7x"],
  color: root.colours.lightBrand,
});
globalStyle(`${reviewHighlight} p`, {
  color: root.colours.lightBrand,
});
