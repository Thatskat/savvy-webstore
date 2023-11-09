import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const shopHeader = style({
  height: "40vh",
});

export const beautyHeader = style({
  background: "url('/shopHeader/beauty-shop-header.webp') no-repeat center",
  backgroundSize: "cover",
});

export const womensHeader = style({
  background: "url('/shopHeader/womens-shop-header.webp') no-repeat center",
  backgroundSize: "cover",
});
export const mensHeader = style( {
  background: "url('/shopHeader/mens-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});

export const kidsHeader = style( {
  background: "url('/shopHeader/kids-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});
export const booksHeader = style( {
  background: "url('/shopHeader/books-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});
export const collectablesHeader = style( {
  background: "url('/shopHeader/collectables-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});
export const electricalsHeader = style( {
  background: "url('/shopHeader/electricals-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});

export const entertainmentHeader = style( {
  background: "url('/shopHeader/entertainment-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});
export const furnitureHeader = style( {
  background: "url('/shopHeader/furniture-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});
export const homewaresHeader = style( {
  background: "url('/shopHeader/homewares-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});
export const sportsHeader = style( {
  background: "url('/shopHeader/sports-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});
export const toysHeader = style( {
  background: "url('/shopHeader/toys-shop-header.webp') no-repeat center",
  backgroundSize: "cover"
});
globalStyle(`${shopHeader} .heading`, {
  padding: `${root.spacing["9x"]} 200px`,
});

globalStyle(`${shopHeader} .heading img`, {
  width: "9rem",
  marginTop: root.spacing["3x"],
  marginBottom: "-3rem",
});
globalStyle(`${shopHeader} .heading h1`, {
  color: root.colours.primary,
  fontSize: root.fontSizes["8x"],
  marginLeft: root.spacing["7x"],
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
  fontWeight: root.fontWeights.bold,
});

globalStyle(`${itemShow} span`, {
  color: root.colours.secondary,
});
