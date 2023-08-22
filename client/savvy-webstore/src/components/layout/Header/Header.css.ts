import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../../styles/themes.css";

export const header = style({
  padding: `${root.spacing["3x"]} ${root.spacing.none} `,
  fontFamily: root.fonts.body,
});

export const topHeader = style({
  display: "flex",
  justifyContent: "space-around",
  borderBottom: `${root.colours.lightGrey} 1px solid`,
});

export const accountLinks = style({
  color: "blue",
});

globalStyle(`${accountLinks} ul`, {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-evenly",
});

globalStyle(`${accountLinks} ul li`, {
padding: "0rem 1rem"
});

export const bottomHeader = style({
  display: "flex",
  justifyContent: "space-between",
})
