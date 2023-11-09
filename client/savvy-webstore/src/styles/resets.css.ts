import { globalStyle } from "@vanilla-extract/css";
import { root } from "./themes.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("body", {
  fontFamily: root.fonts.body,
});

globalStyle(".loading", {
  textAlign: "center",
  color: root.colours.secondary,
  fontSize: root.fontSizes["6x"],
  margin: `${root.spacing["4x"]} auto`,
});

globalStyle(".d-none", {
  display: "none",
});
