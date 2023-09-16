import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const header = style({
  fontSize: root.fontSizes["7x"],
});

globalStyle(`${header} h1`, {
  width: "60%",
  textTransform: "uppercase",
  textShadow: `2px 4px 4px ${root.colours.lightGrey}`,
  color: root.colours.primary,
});

export const overviewCategories = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)"
})



export const byCategory = style({});

globalStyle(`${byCategory} h2`, {
  color: "#2C4259",
  fontSize: root.fontSizes["7x"],
  textTransform: "uppercase",
  padding: `${root.spacing["3x"]} 0`,
  borderBottom: `solid 3px ${root.colours.grey} `,
});

globalStyle(`${byCategory} .categoryCollection`, {
    margin: `${root.spacing["4cx"]} 0`
  });
globalStyle(`${byCategory} .categoryCollection a`, {
  textDecoration: "none",
});
globalStyle(`${byCategory} .categoryCollection h4`, {
  textTransform: "uppercase",
  color: "#2C4259",
  textAlign: "center",
});
globalStyle(`${byCategory} .categoryCollection img`, {
  width: "13rem",
  borderRadius: 10,
});
