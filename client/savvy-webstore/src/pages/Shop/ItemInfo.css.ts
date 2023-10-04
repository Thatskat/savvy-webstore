import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const info = style({
  padding: "0 200px",
  color: root.colours.secondary,
  margin: `${root.spacing["4x"]} 0`
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
  margin: `${root.spacing["2x"]} 0`
});

globalStyle(`${info} .mainGrid .itemDetails .sku`, {
  fontSize: root.fontSizes["1x"],
  fontWeight: root.fontWeights.bold,
  color: "#a3a3a3",
});

globalStyle(`${info} .mainGrid .itemDetails p`, {
    fontSize: root.fontSizes["2x"]
  });
globalStyle(`${info} .mainGrid .itemDetails .price`, {
    fontWeight: root.fontWeights.regular
})