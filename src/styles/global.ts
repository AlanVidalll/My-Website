import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent
} from 'styled-components'

type GlobalStylesProps = {
  removeBg?: boolean
}

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
/* dm-sans-regular - latin */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local(''),
       url('../fonts/dm-sans-v6-latin-regular.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */      
}
/* dm-sans-500 - latin */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-dispay: swap;
  src: local(''),
       url('../fonts/dm-sans-v6-latin-500.woff2') format('woff2');/* Chrome 26+, Opera 23+, Firefox 39+ */
}    
/* dm-sans-700 - latin */
@font-face {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-displa: swap;
  src: local(''),
       url('../fonts/dm-sans-v6-latin-700.woff2') format('woff2'); /* Chrome 26+, Opera 23+, Firefox 39+ */
}    
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

${({ theme, removeBg }) => css`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    ${!removeBg &&
    css`
      background-color: ${theme.colors.mainBg};
    `}
  }
`}
`
export default GlobalStyles
