import { style } from "@vanilla-extract/css";
import { root } from "../../../styles/themes.css";

export const button = style({
    fontFamily: root.fonts.body,
    fontWeight: root.fontWeights.bold,
    fontSize: root.fontSizes["5x"],
    color: root.colours.primary,
    background: root.colours.brand,
    border: "none",
    borderRadius: 60,
    padding: root.spacing["2x"],
    width: "10rem",
    transition: "all ease-in-out 1s",
    cursor: "pointer",
    ":hover": {
      background: root.colours.darkBrand,
    },
  });