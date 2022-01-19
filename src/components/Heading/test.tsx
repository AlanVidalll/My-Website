import { renderWithTheme } from '../../utils/tests/helpers'
import { screen } from '@testing-library/react'

import Heading from './index'

describe('<Heading />', () => {
  it('shold render the heading', () => {
    renderWithTheme(<Heading>Heading</Heading>)
    expect(
      screen.getByRole('heading', { name: /Heading/i })
    ).toBeInTheDocument()
  })
})
