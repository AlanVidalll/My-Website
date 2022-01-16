import { renderWithTheme } from 'utils/tests/helpers'
//import { screen } from '@testing-library/react'

import Button from './index'

describe('<Button />', () => {
  it('shold render the heading', () => {
    renderWithTheme(<Button />)
  })
})
