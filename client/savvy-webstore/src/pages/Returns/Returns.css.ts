import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const returnsPage = style({
  padding: `0 200px`,
  color: root.colours.secondary,
});

globalStyle(`${returnsPage} h1`, {
  fontSize: root.fontSizes["8x"],
  margin: `${root.spacing["4x"]} 0`,
  textAlign: "center"
});

globalStyle(`${returnsPage} p`, {
  fontSize: root.fontSizes["2x"],
});

globalStyle(`${returnsPage} h3`, {
  fontSize: root.fontSizes["4x"],
  margin: `${root.spacing["2x"]} 0`,
});

globalStyle(`${returnsPage} ul`, {
  fontSize: root.fontSizes["2x"],
  margin: `0 ${root.spacing["4x"]}`,
});

export const highlightBox = style({
    background: root.colours.primary,
    borderRadius: 10,
    boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
    padding: root.spacing["5x"],
    margin: `${root.spacing["4x"]} auto`,
    marginBottom: root.spacing["8x"],

})
globalStyle(`${highlightBox} p`, {
    textAlign: "center",
    width: "50%",
    margin: "auto"
})

export const greenBlob = style({
    zIndex: "-1",
    position: "absolute",
    width: "7rem",
    left: "9rem"
})

export const blueBlob = style({
    zIndex: "-1",
    position: "absolute",
    width: "9rem",
    right: "8rem"
})