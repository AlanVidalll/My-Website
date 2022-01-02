import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'
import Head from './index'

describe('<Head />', () => {
  it('shold render the heading', () => {
    renderWithTheme(<Head />)
    expect(screen.getByRole('heading', { name: /head/i })).toBeInTheDocument()
  })
})
