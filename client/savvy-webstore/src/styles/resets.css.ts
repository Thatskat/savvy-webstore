import { globalStyle } from '@vanilla-extract/css';
import { root } from './themes.css';

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
})

globalStyle('body', {
  fontFamily: root.fonts.body
})
