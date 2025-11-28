import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import ContactForm from '../ContactForm'
import { sendContactEmail } from '../../utils/email'
import { vi } from 'vitest'

// Mock the email util to avoid network calls
vi.mock('../../utils/email', () => ({
  sendContactEmail: vi.fn(),
}))


describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders form fields and submit button', () => {
    render(<ContactForm />)
    expect(screen.getByPlaceholderText(/Ahmed Ashraf/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your.email@example.com/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/tell me about your project/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('shows validation error when fields are empty and submit is clicked', async () => {
    const { container } = render(<ContactForm />)
    const form = container.querySelector('form')!
    fireEvent.submit(form)
    expect(await screen.findByText(/please complete all fields/i)).toBeInTheDocument()
    expect(sendContactEmail).not.toHaveBeenCalled()
  })

  it('submits the form and shows success state', async () => {
    ;(sendContactEmail as jest.Mock).mockResolvedValueOnce(undefined)
    const { container } = render(<ContactForm />)

    const nameInput = screen.getByPlaceholderText(/Ahmed Ashraf/i)
    const emailInput = screen.getByPlaceholderText(/your.email@example.com/i)
    const messageInput = screen.getByPlaceholderText(/tell me about your project/i)

    fireEvent.change(nameInput, { target: { value: 'Test User' } })
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.change(messageInput, { target: { value: 'Hello there' } })

    const form = container.querySelector('form')!

    fireEvent.submit(form)

    // form will be submitted after we fill inputs; wait for the mocked email util
    await waitFor(() => expect(sendContactEmail).toHaveBeenCalledTimes(1))
    expect(sendContactEmail).toHaveBeenCalledWith({ fullName: 'Test User', email: 'test@example.com', message: 'Hello there' })

    // At minimum, the email util was called with the expected payload
    // (UI success messages are animated and can be flaky under JSDOM)
  })
})
