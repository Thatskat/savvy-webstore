import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const itemsGrid = style({
  padding: `${root.spacing["8x"]} 200px`,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem 1rem",
});

export const overview = style({
  padding: "0px 200px",
  color: root.colours.secondary,
});

globalStyle(`${overview} h1`, {
  fontSize: root.fontSizes["8x"],
  marginTop: root.spacing["6x"],
  marginBottom: root.spacing["2x"],
  textAlign: "center",
});

globalStyle(`${overview} p`, {
  textAlign: "center",
});

export const card = style({
  background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["1x"],
});

globalStyle(`${card} img`, {
  borderRadius: 10,
  width: "12rem",
});

globalStyle(`${card} h2`, {
  textAlign: "center",
});

globalStyle(`${card} .btn`, {
  textDecoration: "none",
});
