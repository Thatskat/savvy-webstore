import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const cart = style({
    padding: "0px 200px",
    color: root.colours.secondary,
  });
  
  globalStyle(`${cart} h1`, {
    fontSize: root.fontSizes["8x"],
    marginTop: root.spacing["6x"],
    marginBottom: root.spacing["2x"],
    textAlign: "center",
  });
  
globalStyle(`${cart} .grid`, {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)"
})

globalStyle(`${cart} .grid .orderSummary`, {
    background: root.colours.primary,
    borderRadius: 10,
    boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
    padding: root.spacing["5x"],
    margin: `${root.spacing["2x"]} 0`,
})

globalStyle(`${cart} .grid .orderSummary h3`, {
    fontWeight: root.fontWeights.bold,
    fontSize: root.fontSizes["3x"]
})
globalStyle(`${cart} .grid .orderSummary p`, {
    fontSize: root.fontSizes["2x"]
})

globalStyle(`${cart} .grid .orderSummary .btn`, {
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
globalStyle(`${cart} .grid .orderSummary .btn a`, {
    textDecoration: "none",
    color: root.colours.primary,
})


globalStyle(`${cart} .grid .orderSummary .btn:hover`, {
    background: root.colours.darkBrand,
  });