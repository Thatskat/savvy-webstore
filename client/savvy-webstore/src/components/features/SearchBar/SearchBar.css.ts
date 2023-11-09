import {style, globalStyle} from '@vanilla-extract/css';
import { root } from '../../../styles/themes.css';

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

  globalStyle(`${optionsBar} .salesShuffle button`, {
    background: "none",
    border: "none",
    fontWeight: root.fontWeights.bold,
    color: root.colours.secondary
  })