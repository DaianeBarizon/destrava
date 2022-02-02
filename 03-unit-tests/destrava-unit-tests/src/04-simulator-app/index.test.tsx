
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

    const button = screen.getByText(/simular/i)
    const input = screen.getByRole('textbox')
    const resultContainer = screen.getByLabelText('result')

    const mockValue = '3'

    userEvent.type(input, mockValue)
    userEvent.click(button)

    expect(resultContainer).toHaveTextContent(String(simulateExchange(Number(mockValue), 'USD').ask))
  })
})
