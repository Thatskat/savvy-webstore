import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const shopHeader = style({
  background:
    "url('https://images.unsplash.com/photo-1682695797221-8164ff1fafc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
  height: "40vh",
});

globalStyle(`${shopHeader} .heading`, {
  padding: `${root.spacing["9x"]} 200px`,
});

globalStyle(`${shopHeader} .heading img`, {
  width: "9rem",
  marginTop: root.spacing["3x"],
  marginBottom: "-3rem"
});
globalStyle(`${shopHeader} .heading h1`, {
  color: root.colours.primary,
  fontSize: root.fontSizes["8x"],
  marginLeft: root.spacing["7x"]
});

export const itemsGrid = style({
  padding: `${root.spacing["8x"]} 200px`,
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "2rem 1rem",
});



export const itemShow = style({
  margin: `${root.spacing.none} 200px`,
  color: "#a3a3a3",
  textTransform: "uppercase",
  fontSize: root.fontSizes["2x"],
  fontWeight: root.fontWeights.bold
})

globalStyle(`${itemShow} span`, {
  color: root.colours.secondary
})