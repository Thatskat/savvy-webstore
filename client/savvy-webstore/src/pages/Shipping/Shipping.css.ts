import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const shipping = style({
  padding: "0px 200px",
  color: root.colours.secondary,
  marginBottom: root.spacing["5x"],
});

globalStyle(`${shipping} h1`, {
  textAlign: "center",
  fontSize: root.fontSizes["8x"],
  margin: `${root.spacing["4x"]} 0`,
});
globalStyle(`${shipping} .subText`, {
  textAlign: "center",
  fontSize: root.fontSizes["2x"],
});

globalStyle(`${shipping} h3`, {
  fontSize: root.fontSizes["4x"],
  margin: `${root.spacing["2x"]} 0`,
});

globalStyle(`${shipping} p`, {
  fontSize: root.fontSizes["2x"],
  paddingBottom: root.spacing["1x"],
});

globalStyle(`${shipping} .highlight`, {
    background: root.colours.primary,
    borderRadius: 10,
    boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
    padding: root.spacing["5x"],
    margin: `${root.spacing["4x"]} auto`,
    marginBottom: root.spacing["8x"],
    textAlign: "center",
})
