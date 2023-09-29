import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const aboutUs = style({
  padding: "0px 200px",
  color: root.colours.secondary,
});

globalStyle(`${aboutUs} h1`, {
  fontSize: root.fontSizes["8x"],
  marginTop: root.spacing["6x"],
  marginBottom: root.spacing["2x"],
});

globalStyle(`${aboutUs} p`, {
  fontSize: root.fontSizes["2x"],
  paddingRight: root.spacing["3x"],
});
export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: root.spacing["9x"],
});

globalStyle(`${grid} div`, {
  width: "110%",
});
globalStyle(`${grid} img`, {
  width: "30rem",
  borderRadius: "20px",
  margin: "auto",
  marginTop: root.spacing["9x"],
  height: "27rem",
});
globalStyle(`${grid} div .secondParagraph`, {
  margin: `${root.spacing["5x"]} auto`,
});

export const overView = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  margin: `${root.spacing["9x"]} 0`,
  padding: `${root.spacing["8x"]} 0`,
  textAlign: "center",
  gap: root.spacing["6x"],
});

globalStyle(`${overView} img`, {
  width: "4.5rem",
});
globalStyle(`${overView} h2`, {
  textTransform: "uppercase",
  fontSize: root.fontSizes["7x"],
  marginTop: "-1rem",
});
globalStyle(`${overView} .mainImage`, {
  width: "20rem",
  height: "20rem",
  borderRadius: "100%",
  marginBottom: root.spacing.none,
});

globalStyle(`${overView} p`, {
  width: "30rem",
  margin: `${root.spacing["5x"]} auto`,
});

export const environmentalImpact = style({
  textAlign: "center",
  margin: `${root.spacing["9x"]} 0`
});
globalStyle(`${environmentalImpact} .info`, {
  background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["5x"],
  margin: `${root.spacing["4x"]} auto`,
  width: "90%",
});

globalStyle(`${environmentalImpact} .info h3`, {
  fontSize: root.fontSizes["6x"],
  margin: `${root.spacing["3x"]} auto`,
});
globalStyle(`${environmentalImpact} .info p`, {
  width: "90%",
  margin: `${root.spacing["3x"]} auto`,
});

globalStyle(`${environmentalImpact} img`, {
  zIndex: "-1",
  position: "absolute",
  width: "20rem",
});

globalStyle(`${environmentalImpact} .blueBlob`, {
  left: "6rem",
});

globalStyle(`${environmentalImpact} .greenBlob`, {
  right: "8rem",
});
