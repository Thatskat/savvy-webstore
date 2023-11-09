import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const contactUs = style({
  padding: "0px 200px",
  color: root.colours.secondary,
  marginBottom: root.spacing["5x"]
});

globalStyle(`${contactUs} h1`, {
  textAlign: "center",
  fontSize: root.fontSizes["8x"],
  margin: `${root.spacing["4x"]} 0`,
});

globalStyle(`${contactUs} .subText`, {
  textAlign: "center",
  fontSize: root.fontSizes["2x"],
});

globalStyle(`${contactUs} h3`, {
  fontSize: root.fontSizes["4x"],
  margin: `${root.spacing["2x"]} 0`,
});

globalStyle(`${contactUs} p`, {
    fontSize: root.fontSizes["2x"],
    paddingBottom: root.spacing["1x"]
  });
  globalStyle(`${contactUs} a`, {
    fontWeight: root.fontWeights.bold,
    textDecoration: "none",
    color: root.colours.brand
  });
  
