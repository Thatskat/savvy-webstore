import { globalStyle } from '@vanilla-extract/css';

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
})
