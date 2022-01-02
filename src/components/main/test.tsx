import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import Main from '.'

describe('<Main>', () => {
  it('Should render the heading ', () => {
    const { container } = renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})

it('should rende the colors corrects', () => {
  const { container } = renderWithTheme(<Main />)

  expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
})
