import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const modal = style({
  background: root.colours.primary,
  width: "30rem",
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["5x"],
  margin: `${root.spacing["4x"]} auto`,
});

globalStyle(`${modal} h2`, {
  textTransform: "uppercase",
  color: root.colours.secondary,
  fontSize: root.fontSizes["6x"],
  textAlign: "center",
});

globalStyle(`${modal} .closeButton`, {
  background: "none",
  border: "none",
  fontSize: root.fontSizes["5x"],
  cursor: "pointer",
});

globalStyle(`${modal} .closeButton svg`, {
  color: "#b91c1c",
});

globalStyle(`${modal} label`, {
  display: "none",
});

globalStyle(`${modal} input`, {
  borderRadius: 30,
  padding: root.spacing["2x"],
  color: root.colours.secondary,
  fontFamily: root.fonts.body,
  borderColor: root.colours.secondary,
  display: "block",
  width: "80%",
  margin: `${root.spacing["3x"]} auto`,
});

globalStyle(`${modal} input:focus`, {
  outline: "none",
});

globalStyle(`${modal} .subTextButton`, {
  color: "#a3a3a3",
  background: "none",
  border: "none",
  textTransform: "uppercase",
  fontSize: root.fontSizes["1x"],
  textAlign: "center",
  margin: "auto",
  cursor: "pointer",
  alignContent: "center",
  width: "100%",
  display: "block"
});

globalStyle(`${modal} .noAccount`, {
color: root.colours.brand,
fontSize: root.fontSizes["2x"],
textAlign: "center",
padding: `${root.spacing["2x"]} 0`
});

globalStyle(`${modal} .noAccount button`, {
  color: root.colours.brand,
  fontSize: root.fontSizes["2x"],
  textAlign: "center",
  padding: `${root.spacing["2x"]} 0`,
  background: "none",
  border: "none",
  textDecoration: "underline",
  cursor: "pointer"
  });

  globalStyle(`${modal }.btn-small`, {
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
  });
  
  globalStyle(`${modal} .btn-small:hover`, {
    background: root.colours.darkBrand,
  });

  globalStyle(`${modal} .bold`, {
    fontWeight: root.fontWeights.bold,
    textDecoration: "none !important"
  })