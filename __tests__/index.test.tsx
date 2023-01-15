import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const getStarted = screen.getByText(/Get started by editing/i)

    expect(getStarted).toBeInTheDocument()
  })
})