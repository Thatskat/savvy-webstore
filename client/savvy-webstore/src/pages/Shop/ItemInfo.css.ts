import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const info = style({
  padding: "0 200px",
  color: root.colours.secondary,
  margin: `${root.spacing["4x"]} 0`,
});

globalStyle(`${info} .mainGrid`, {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: root.spacing["9x"],
});

globalStyle(`${info} .mainGrid img`, {
  width: "40rem",
  borderRadius: 10,
});

globalStyle(`${info} .mainGrid .itemDetails a`, {
  color: root.colours.brand,
  textTransform: "uppercase",
  fontSize: root.fontSizes["2x"],
});
globalStyle(`${info} .mainGrid .itemDetails h1`, {
  fontSize: root.fontSizes["7x"],
  marginTop: root.spacing["2x"],
});

globalStyle(`${info} .mainGrid .itemDetails .sku`, {
  fontSize: root.fontSizes["1x"],
  fontWeight: root.fontWeights.bold,
  color: "#a3a3a3",
});

globalStyle(`${info} .mainGrid .itemDetails p`, {
  fontSize: root.fontSizes["2x"],
});

globalStyle(`${info} .mainGrid .itemDetails .description`, {
  margin: `${root.spacing["2x"]} 0`,
});
globalStyle(`${info} .mainGrid .itemDetails .price`, {
  fontWeight: root.fontWeights.bold,
  fontSize: root.fontSizes["6x"],
  margin: `${root.spacing["2x"]} 0`,
});

globalStyle(`${info} .mainGrid .itemDetails button`, {
  border: "none",
  fontSize: root.fontSizes["4x"],
  margin: `${root.spacing["3x"]} 0`,
  fontFamily: root.fonts.body,
  background: "none",
});

globalStyle(`${info} .mainGrid .itemDetails .blue`, {
  background: root.colours.secondary,
  padding: `${root.spacing["2x"]} ${root.spacing["8x"]}`,
  borderRadius: 20,
  color: root.colours.primary,
  fontWeight: root.fontWeights.bold,
  textTransform: "uppercase",
  fontSize: root.fontSizes["3x"],
});
globalStyle(`${info} .mainGrid .itemDetails .storeLocation`, {
  color: root.colours.brand,
  fontWeight: root.fontWeights.bold,
  textDecoration: "none"
});
globalStyle(`${info} .mainGrid .itemDetails .blue svg`, {
  color: root.colours.brand,
});

globalStyle(`${info} .mainGrid .itemDetails .wishlist`, {
  borderRadius: 100,
  border: `${root.colours.secondary} solid 1px`,
  padding: root.spacing["1x"],
  margin: `0 ${root.spacing["3x"]}`
});

globalStyle(`${info} .mainGrid .itemDetails .wishlist svg`, {
  color: root.colours.brand
})

globalStyle(`${info} .mainGrid .itemDetails .productOverview`, {
  background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["3x"],
  margin: `${root.spacing["3x"]} auto`,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: root.spacing["2x"],
});

export const svgColour = style({
  color: root.colours.brand,
  fontSize: root.fontSizes["6x"],
});

globalStyle(`${info} .mainGrid .itemDetails .deliveryOptions`, {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  margin: `${root.spacing["1x"]} 0`,
});

globalStyle(`${info} .mainGrid .itemDetails .deliveryOptions .bold`, {
  fontWeight: root.fontWeights.bold,
});

globalStyle(`${info} .mainGrid .itemDetails .deliveryOptions div`, {
  marginLeft: "-10rem"
});

globalStyle('.allProductsLink', {
  color: root.colours.darkBrand,
  fontWeight: root.fontWeights.bold,
  textDecoration: "none",
  marginBottom: root.spacing["4x"]
})