import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'

describe('Header', () => {
  it('renders navigation links', () => {
    render(<Header theme="dark" onToggleTheme={jest.fn()} />)
    expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('invokes toggle handler when theme button is pressed', () => {
    const toggleMock = jest.fn()
    render(<Header theme="dark" onToggleTheme={toggleMock} />)
    const toggleButton = screen.getByLabelText(/toggle theme/i)
    fireEvent.click(toggleButton)
    expect(toggleMock).toHaveBeenCalledTimes(1)
  })
})

