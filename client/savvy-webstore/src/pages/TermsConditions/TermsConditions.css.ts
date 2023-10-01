import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const termsConditionsPage = style({
  padding: `0 200px`,
  color: root.colours.secondary,
  marginBottom: root.spacing["8x"]
});

globalStyle(`${termsConditionsPage} h1`, {
  fontSize: root.fontSizes["8x"],
  margin: `${root.spacing["4x"]} 0`,
  textAlign: "center",
});

globalStyle(`${termsConditionsPage} p`, {
  fontSize: root.fontSizes["2x"],
});

globalStyle(`${termsConditionsPage} h3`, {
  fontSize: root.fontSizes["4x"],
  margin: `${root.spacing["2x"]} 0`,
});

globalStyle(`${termsConditionsPage} ul`, {
  fontSize: root.fontSizes["2x"],
  margin: `0 ${root.spacing["4x"]}`,
});

globalStyle(`${termsConditionsPage} a`, {
  fontWeight: root.fontWeights.bold,
  textDecoration: "none",
  color: root.colours.secondary,
});
globalStyle(`${termsConditionsPage} a:hover`, {
  textDecoration: "underline",
});
