import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const account = style({
  padding: "0px 200px",
  color: root.colours.secondary,
});

globalStyle(`${account} h1`, {
  fontSize: root.fontSizes["8x"],
  marginTop: root.spacing["6x"],
  marginBottom: root.spacing["2x"],
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: root.spacing["9x"],
});

globalStyle(`${account} .btn`, {
  fontFamily: root.fonts.body,
  fontWeight: root.fontWeights.bold,
  fontSize: root.fontSizes["3x"],
  color: root.colours.primary,
  background: root.colours.brand,
  border: "none",
  borderRadius: 60,
  padding: root.spacing["2x"],
  width: "20rem",
  transition: "all ease-in-out 1s",
  cursor: "pointer",
  textDecoration: "none",
  display: "block",
  textAlign: "center",
  margin: `${root.spacing["1x"]} 0`,
});

globalStyle(`${account} .btn:hover`, {
  background: root.colours.darkBrand,
});

globalStyle(`${account} .adminBtn`, {
  background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["5x"],
  margin: `${root.spacing["5x"]} 0`,
});

globalStyle(`${account} .mt-3`, {
  marginTop: root.spacing["3x"],
  fontWeight: "bold"
})
