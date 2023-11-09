import { style, globalStyle } from "@vanilla-extract/css";
import { root } from "../../styles/themes.css";

export const careersPage = style({
  padding: "0px 200px",
  color: root.colours.secondary,
});

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: root.spacing["9x"],
});

globalStyle(`${grid} .generalInfo`, {
  width: "120%",
});

globalStyle(`${grid} .generalInfo h1`, {
  fontSize: root.fontSizes["8x"],
  marginTop: root.spacing["6x"],
  marginBottom: root.spacing["2x"],
});
globalStyle(`${grid} .generalInfo p`, {
  fontSize: root.fontSizes["2x"],
});
globalStyle(`${grid} .generalInfo .staffProfiles`, {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  margin: `${root.spacing["1x"]} auto`,
  gap: root.spacing["3x"],
});
globalStyle(`${grid} .generalInfo .staffProfiles img`, {
  borderRadius: "100%",
  width: "10rem",
  height: "10rem",
  margin: "auto",
});

globalStyle(`${grid} .generalInfo .staffProfiles h3`, {
  fontSize: root.fontSizes["4x"],
  margin: `${root.spacing["4x"]} auto`,
});
globalStyle(`${grid} .generalInfo .staffProfiles p`, {
  margin: `${root.spacing["2x"]} 0`,
  width: "80%",
});
export const formBox = style({
  background: root.colours.primary,
  borderRadius: 10,
  boxShadow: "  -2px 9px 41px -4px rgba(81,81,81,0.75)",
  padding: root.spacing["5x"],
  margin: `${root.spacing["4x"]} auto`,
  width: "80%",
  height: "95vh"
});

globalStyle(`${formBox} h2`, {
  textTransform: "uppercase",
  fontSize: root.fontSizes["5x"],
  margin: `${root.spacing["2x"]} 0.4rem`
});

globalStyle(`${formBox} p`, {
  fontSize: root.fontSizes["2x"]
});

globalStyle(`${formBox} .applyNow`, {
  borderBottom: `3px solid ${root.colours.grey}`,
  paddingBottom: root.spacing["6x"]
});

globalStyle(`${formBox} .applyNow img`, {
 width: "20rem",
 paddingTop: root.spacing["3x"],
 marginBottom: `-2.5rem`,
});

export const button = style({
  fontFamily: root.fonts.body,
  fontWeight: root.fontWeights.bold,
  fontSize: root.fontSizes["2x"],
  color: root.colours.primary,
  background: root.colours.brand,
  border: "none",
  borderRadius: 60,
  padding: root.spacing["1x"],
  width: "10rem",
  transition: "all ease-in-out 1s",
  cursor: "pointer",
  textDecoration: "none",
  display: "block",
  textAlign: "center",
  marginTop: root.spacing["2x"]
})
export const savvyWantTo = style({
  width: "9rem",
  marginBottom: "-1.7rem"
})

globalStyle(`${formBox} label`, {
  display: "none"
})

globalStyle(`${formBox} input`, {
  borderRadius: 30,
  padding: root.spacing["1x"],
  color: root.colours.secondary,
  fontFamily: root.fonts.body,
  borderColor: root.colours.secondary,
  width: "100%",
  margin: `0.2rem auto`
})

globalStyle(`${formBox} input:focus`, {
  outline: "none",
})
