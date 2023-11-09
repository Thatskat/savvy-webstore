import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const wishlist = style({
    padding: "0px 200px",
    color: root.colours.secondary,
  });
  
  globalStyle(`${wishlist} h1`, {
    fontSize: root.fontSizes["8x"],
    marginTop: root.spacing["6x"],
    marginBottom: root.spacing["2x"],
    textAlign: "center",
  });
  
  globalStyle(`${wishlist} p`, {
    textAlign: "center",
    marginBottom: root.spacing["5x"]
  });

  globalStyle(`${wishlist} .itemList`, {
    height: "40vh",
    overflowY: "scroll",
    margin: root.spacing["3x"]
  })

  globalStyle(`${wishlist} .card`, {
    background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  2px 2px 2px 2px rgba(81,81,81,0.75)",
  padding: root.spacing["5x"],
  margin: `${root.spacing["1x"]} ${root.spacing["3x"]}`,
  })