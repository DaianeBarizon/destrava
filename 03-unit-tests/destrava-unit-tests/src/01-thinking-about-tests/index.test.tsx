/*
  Desafio formatPercentage
  Analise e descreva os casos de testes possíveis para a função formatPercentage
*/

import { formatPercentage } from "./index";

describe("formatPercentage", () => {
  it('should be a function', () => {
    expect(formatPercentage).toBeInstanceOf(Function)
  })

  it('when percentSymbol is false it does not display value with percentage', () => {
    expect(formatPercentage(2, { minimumFractionDigits: 2, percentageSymbol: false })).toStrictEqual('2,00')
  })

  it('when percentageSymbol displays value with percentage', () => {
    expect(formatPercentage(2, { minimumFractionDigits: 2, percentageSymbol: true })).toStrictEqual('2,00%')
  })
});
