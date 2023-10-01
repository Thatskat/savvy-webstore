import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const privacyPolicy = style({
  padding: `0 200px`,
  color: root.colours.secondary,
});

globalStyle(`${privacyPolicy} h1`, {
  fontSize: root.fontSizes["8x"],
  margin: `${root.spacing["4x"]} 0`,
  textAlign: "center",
});

globalStyle(`${privacyPolicy} .date`, {
  textTransform: "uppercase",
  color: "#a3a3a3",
  fontWeight: root.fontWeights.bold,
  textAlign: "center",
  fontSize: root.fontSizes["1x"],
  marginBottom: root.spacing["4x"],
});

globalStyle(`${privacyPolicy} p`, {
    fontSize: root.fontSizes["2x"],
  });
  
  globalStyle(`${privacyPolicy} h3`, {
    fontSize: root.fontSizes["4x"],
    margin: `${root.spacing["2x"]} 0`,
  });
  
  globalStyle(`${privacyPolicy} h4`, {
    fontSize: root.fontSizes["2x"],
  });
  globalStyle(`${privacyPolicy} ul`, {
    fontSize: root.fontSizes["2x"],
    margin: `0 ${root.spacing["4x"]}`,
  });

  globalStyle(`${privacyPolicy} .contactUsHighlight`, {
    background: root.colours.primary,
    borderRadius: 10,
    boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
    padding: root.spacing["5x"],
    margin: `${root.spacing["4x"]} auto`,
    marginBottom: root.spacing["8x"],
    textAlign: "center"
  })

  globalStyle(`${privacyPolicy} .contactUsHighlight h2`, {
    fontSize: root.fontSizes["6x"],
    marginBottom: root.spacing["2x"]
  })