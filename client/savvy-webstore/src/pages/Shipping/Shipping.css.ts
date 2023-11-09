import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const shipping = style({
    padding: "0px 200px",
    color: root.colours.secondary,
    marginBottom: root.spacing["5x"]
  });
  
  globalStyle(`${shipping} h1`, {
    textAlign: "center",
    fontSize: root.fontSizes["8x"],
    margin: `${root.spacing["4x"]} 0`,
  });