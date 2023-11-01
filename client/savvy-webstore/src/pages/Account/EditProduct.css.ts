import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const itemsGrid = style({
    padding: `${root.spacing["8x"]} 200px`,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "2rem 1rem",
  });