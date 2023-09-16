import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../../styles/themes.css";

export const card = style({
    width: "40%",
    textDecoration: "none",
  });
  
  globalStyle(`${card} img`, {
    width: "21rem",
    borderRadius: 10,
    boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  });
  
  globalStyle(`${card} h2`, {
    color: root.colours.brand,
    fontWeight: root.fontWeights.bold,
    textTransform: "uppercase",
    fontSize: root.fontSizes["7x"],
    marginLeft: root.spacing["2x"],
  });
  
  globalStyle(`${card} .arrowButton`, {
    zIndex: 2,
    position: "relative",
    borderRadius: "100%",
    width: "3rem",
    background: root.colours.primary,
    boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
    fontSize: root.fontSizes["6x"],
    marginLeft: 250,
    marginTop: "-75px",
  });
  
  globalStyle(`${card} .arrowButton svg`, {
    color: "#2C4259",
    marginLeft: 9,
    marginTop: 10,
  });