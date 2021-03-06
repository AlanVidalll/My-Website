export default {
  grid: {
    container: '130rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.4rem'
  },
  font: {
    family:
      "DM Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",

    light: 300,
    normal: 400,
    small_bold: 500,
    bold: 700,
    sizes: {
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.6rem',
      xlarge: '3.2rem',
      xxlarge: '3.6rem'
    }
  },
  colors: {
    mainBg: '#0C0C0C',
    white: '#F9F9F9',
    green: '#00DF5E',
    dark: '#171717',
    gray: '#828282',
    gray200: '#333333',
    gray400: '#212121',
    darkGray: '#2E2F42'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  }
} as const
