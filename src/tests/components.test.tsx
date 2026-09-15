import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'
import { ContactForm, Header, ServiceCard } from '../components'
import { services } from '../data'
import { NotFound } from '../pages'

describe('site components', () => {
  it('renders navigation and opens mobile menu', () => { render(<MemoryRouter><Header /></MemoryRouter>); expect(screen.getByText('Services')).toBeInTheDocument(); expect(screen.getByText('Teams')).toHaveAttribute('href', '/teams'); const button = screen.getByRole('button', { name: /open menu/i }); fireEvent.click(button); expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument() })
  it('renders a service card', () => { render(<MemoryRouter><ServiceCard service={services[0]} /></MemoryRouter>); expect(screen.getByText('Custom Software Engineering')).toBeInTheDocument(); expect(screen.getByText(/Explore service/i)).toBeInTheDocument() })
  it('validates and locally completes the contact form', async () => { render(<MemoryRouter><ContactForm /></MemoryRouter>); fireEvent.click(screen.getByRole('button', { name: /send project inquiry/i })); expect(screen.getByRole('alert')).toHaveTextContent(/required fields/i); fireEvent.change(screen.getByLabelText(/Full name/i), { target: { value: 'Ada Example' } }); fireEvent.change(screen.getByLabelText(/Business email/i), { target: { value: 'ada@example.com' } }); fireEvent.change(screen.getByLabelText(/Project description/i), { target: { value: 'Connect our systems.' } }); fireEvent.click(screen.getByRole('checkbox')); fireEvent.click(screen.getByRole('button', { name: /send project inquiry/i })); expect(await screen.findByText(/Thanks for reaching out/i)).toBeInTheDocument() })
  it('renders the custom 404 view', () => { render(<MemoryRouter><NotFound /></MemoryRouter>); expect(screen.getByText('That page moved on.')).toBeInTheDocument(); expect(screen.getByRole('link', { name: /back to home/i })).toHaveAttribute('href', '/') })
})
