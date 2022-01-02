import { renderWithTheme } from 'utils/tests/helpers'

import Button from './index'

describe('<Button />', () => {
  it('shold render the heading', () => {
    renderWithTheme(<Button />)
  })
})
