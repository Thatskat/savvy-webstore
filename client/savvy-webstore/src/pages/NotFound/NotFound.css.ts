import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const notFound = style({
    padding: "0px 200px",
    color: root.colours.secondary,
  });
  
  globalStyle(`${notFound} h1`, {
    fontSize: root.fontSizes["8x"],
    marginTop: root.spacing["6x"],
    marginBottom: root.spacing["2x"],
    textAlign: "center",
  });
  
  globalStyle(`${notFound} p`, {
    textAlign: "center",
    marginBottom: root.spacing["5x"]
  });
  globalStyle(`${notFound} a`, {
    color: root.colours.brand,
    textDecoration: "none",
    fontWeight: root.fontWeights.bold
  });
  