import { RouterContext } from 'next/dist/shared/lib/router-context'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const parameters = {
  backgrounds: {
    default: 'twitter',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white,
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg,
      },
    ],
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}
export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  )
]
