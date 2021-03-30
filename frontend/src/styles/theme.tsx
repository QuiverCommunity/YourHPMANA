import { palette, colors } from './colors'

const breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '1024px',
  xl: '1216px',
  hd: '1408px'
}

const helpers = {
  flexCenter: `
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexCenterSpaced: `
    display: flex;
    align-items: center;
    justify-content: space-between;
  `
}

export default {
  colors,
  palette,
  breakpoints,
  helpers,

  // misc
  borderRadius: '4px',
  borderColor: '#E7EAF3'
}
