import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingProps } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  normal: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.normal};
  `,
  bold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.bold};
  `,
  small_bold: (theme: DefaultTheme) => css`
    font-weight: ${theme.font.small_bold};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, size, fontWeight }) => css`
    color: ${theme.colors.white};

    ${!!fontWeight && wrapperModifiers[fontWeight](theme)}

    ${!!size && wrapperModifiers[size](theme)}
  `}
`
