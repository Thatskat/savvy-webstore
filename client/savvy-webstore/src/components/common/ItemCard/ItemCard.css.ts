import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../../styles/themes.css";

export const itemCard = style({
    borderRadius: 10,
    boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.5)",
    background: root.colours.primary,
    height: "25rem",
    textDecoration: "none",
  });
  
  globalStyle(`${itemCard} img`, {
    width: "100%",
    height: "13rem" ,
    borderRadius: "10",
  });
  
  globalStyle(`${itemCard} .cardTextContent`, {
    padding: root.spacing["2x"]
  });
  
  globalStyle(`${itemCard} .location`, {
    textTransform: "uppercase",
    fontWeight: root.fontWeights.bold,
    fontSize: root.fontSizes["1x"],
    color: "#A9A9A9",
  });
  
  globalStyle(`${itemCard} h2`, {
      fontWeight: root.fontWeights.light,
      color: root.colours.secondary,
      fontSize: root.fontSizes["4x"],
      marginTop: root.spacing["2x"]
  })
  globalStyle(`${itemCard} .price`, {
      fontWeight: root.fontWeights.bold,
      color: root.colours.secondary,
      fontSize: root.fontSizes["4x"]
  })
  
  globalStyle(`${itemCard} .inline`, {
      display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    marginTop: root.spacing["5x"]
  })
  
  globalStyle(`${itemCard} .wishlistHeart`, {
    background: "none",
    border: "none",
    fontSize: root.fontSizes["5x"],
    justifySelf: "end"
  })
  
  
  globalStyle(`${itemCard} .wishlistHeart svg`, {
   color: root.colours.secondary
  })
  