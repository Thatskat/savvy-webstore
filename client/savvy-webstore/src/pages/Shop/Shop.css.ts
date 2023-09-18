import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const shopHeader = style({
  background:
    "url('https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
  height: "40vh",
});

globalStyle(`${shopHeader} .heading`, {
  padding: `${root.spacing["8x"]} 200px`,
});

export const itemsGrid = style({
  padding: `${root.spacing["8x"]} 200px`,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem 1rem",
});

export const optionsBar = style({
  background: root.colours.primary,
  margin: `${root.spacing["4x"]} 200px`,
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.5)",
  padding: root.spacing["2x"]
});

globalStyle(`${optionsBar} .selectionOverview`, {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  borderRight: `solid 3px ${root.colours.grey} `,
  width: "50rem"
});

globalStyle(`${optionsBar} .selectionOverview button`, {
  background: "none",
  border: "none",
  color: root.colours.secondary,
  textTransform: "uppercase",
  textAlign: "left",
  padding: `${root.spacing["1x"]}`
});

globalStyle(`${optionsBar} .salesShuffle`, {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
})