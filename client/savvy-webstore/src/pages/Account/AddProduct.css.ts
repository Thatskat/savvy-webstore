import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const productPage = style({
  padding: "0px 200px",
  color: root.colours.secondary,
});

globalStyle(`${productPage} h1`, {
  fontSize: root.fontSizes["8x"],
  marginTop: root.spacing["6x"],
  marginBottom: root.spacing["2x"],
  textAlign: "center",
});

globalStyle(`${productPage} form`, {
  background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["5x"],
  margin: `${root.spacing["4x"]} auto`,

});

export const formGrid= style({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: root.spacing['1x']
})

globalStyle(`${productPage} form label`, {
  display: "none",
});

globalStyle(`${productPage} input`, {
  borderRadius: 30,
  padding: root.spacing["1x"],
  color: root.colours.secondary,
  fontFamily: root.fonts.body,
  borderColor: root.colours.secondary,

});
globalStyle(`${productPage} input:focus`, {
  outline: "none",
});

export const show = style({
    display: "block !important"
})