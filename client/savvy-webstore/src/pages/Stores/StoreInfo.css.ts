import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const info = style({
    padding: `0 200px`,
    color: root.colours.secondary,
    marginBottom: root.spacing["4x"],
})

globalStyle(`${info} h1`, {
    textAlign: "center",
    fontSize: root.fontSizes["8x"],
    margin: `${root.spacing["4x"]} 0`,
    textTransform: "capitalize"
  });

  export const grid = style({
    display: "grid",
    gridTemplateColumns: "repeat(2, 2fr)",
    gap: "1rem"
  })

  globalStyle(`${grid} .contactInfo`, {
    background: root.colours.primary,
    borderRadius: 10,
    boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
    padding: root.spacing["4x"],
  })

  globalStyle(`${grid} .contactInfo span`, {
   fontWeight: root.fontWeights.bold
  })