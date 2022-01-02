import { renderWithTheme } from 'utils/tests/helpers'

import Button from './index'

describe('<Button />', () => {
  it('shold render the heading', () => {
    const { container } = renderWithTheme(<Button />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
