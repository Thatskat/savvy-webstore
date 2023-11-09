import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const stores = style({
  padding: `0 200px`,
  color: root.colours.secondary,
  marginBottom: root.spacing["4x"],
});

globalStyle(`${stores} h1`, {
  textAlign: "center",
  fontSize: root.fontSizes["8x"],
  margin: `${root.spacing["4x"]} 0`,
});

globalStyle(`${stores} label`, {
  display: "none",
});

globalStyle(`${stores} input`, {
  borderRadius: 30,
  padding: root.spacing["2x"],
  color: root.colours.secondary,
  fontFamily: root.fonts.body,
  borderColor: root.colours.secondary,
  width: "60%",
  margin: `${root.spacing["3x"]} auto`,
});

globalStyle(`${stores} .browseByRegion`, {});

globalStyle(`${stores} .browseByRegion h2`, {
  fontSize: root.fontSizes["7x"],
  textAlign: "center",
});

globalStyle(`${stores} .browseByRegion .stateButton`, {
  textAlign: "center",
});

globalStyle(`${stores} .browseByRegion .stateButton button`, {
  background: "none",
  border: "none",
  color: root.colours.secondary,
  fontSize: root.fontSizes["4x"],
  margin: `${root.spacing["2x"]}`,
});

globalStyle(`${stores} .browseByRegion .stateButton button:hover`, {
  textDecoration: "underline",
});

globalStyle(`${stores} .browseByRegion .byAlphabet button`, {
  background: "none",
  border: "none",
  color: root.colours.brand,
  fontSize: root.fontSizes["2x"],
  margin: `${root.spacing["2x"]}`,
  textAlign: "center",
  fontWeight: root.fontWeights.bold,
});
globalStyle(`${stores} .browseByRegion .byAlphabet button:hover`, {
  textDecoration: "underline",
});
