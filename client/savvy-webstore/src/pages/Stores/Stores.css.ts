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
  width: "100%",
  margin: `${root.spacing["3x"]} auto`,
});

globalStyle(`${stores} .browseByRegion`, {});

globalStyle(`${stores} .browseByRegion h2`, {
  fontSize: root.fontSizes["7x"],
  textAlign: "center",
  marginTop: root.spacing["9x"]
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

globalStyle(`${stores} .browseByRegion .cardGrid`, {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem",
});
export const card = style({
  background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["5x"],
  margin: `${root.spacing["4x"]} auto`,
});
globalStyle(`${stores} .btn`, {
  fontFamily: root.fonts.body,
  fontWeight: root.fontWeights.bold,
  fontSize: root.fontSizes["2x"],
  color: root.colours.primary,
  background: root.colours.brand,
  border: "none",
  borderRadius: 60,
  padding: root.spacing["1x"],
  width: "10rem",
  transition: "all ease-in-out 1s",
  cursor: "pointer",
  textDecoration: "none",
  display: "block",
  textAlign: "center",
  margin: `${root.spacing["1x"]} auto !important`,
})

globalStyle(`${card} span`, {
  fontWeight: root.fontWeights.bold
})

globalStyle(`${card} h3`, {
  fontSize: root.fontSizes["5x"],
  textTransform: "capitalize"
})

