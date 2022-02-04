import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Simulator } from './index'

import { simulateExchange } from '../03-simulator-function'

describe('Simulator', () => {
  it('should render Simulator', () => {
    render(<Simulator />)
  })

  it('should show correct result', () => {
    render(<Simulator />)

    const mockValue = '3'

    const input = screen.getByRole('textbox')

    userEvent.type(input, mockValue)

    const button = screen.getByText(/simular/i)

    userEvent.click(button)

    expect(screen.getByTestId('value')).toHaveTextContent(String(simulateExchange(Number(mockValue), 'USD').ask))

    expect(screen.getByText('Quanto você vai precisar R$: 16.5')).toBeInTheDocument()
  })
})
