import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import HomePage from './index'

describe('<HomePage />', () => {
  it('shold render the heading', () => {
    renderWithTheme(<HomePage title="My personal website" />)

    expect(
      screen.getByRole('heading', { name: /My personal website/i })
    ).toBeInTheDocument()
  })
})
