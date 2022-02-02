
import { simulateExchange } from './index';

const expectedUSD = 16.5
const expectedConversionLabelUSD = 'Dólar Americano/Real Brasileiro'

const expectedEUR = 18.6
const expectedConversionLabelEUR = 'Euro/Real Brasileiro'

describe('simulateExchange', () => {
  it('should be a function', () => {
    expect(simulateExchange).toBeInstanceOf(Function);
  })

  it('should return converted value to USD', () => {
    expect(simulateExchange(3, 'USD')).toEqual(
      expect.objectContaining({
        ask: expectedUSD,
        name: expectedConversionLabelUSD
      })
    )
  })

  it('should return converted value to EUR', () => {
    expect(simulateExchange(3, 'EUR')).toEqual(
      expect.objectContaining({
        ask: expectedEUR,
        name: expectedConversionLabelEUR
      })
    )
  })
})
