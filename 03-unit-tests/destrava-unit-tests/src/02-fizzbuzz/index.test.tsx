/*
  Desafio FizzBuzz
  Escreva uma função que receba um número e:
  Se o número for divisível por 3, no lugar do número escreva 'Fizz' - X
  Se o número for divisível por 5, no lugar do número escreva 'Buzz' - X
  Se o número for divisível por 3 e 5, no lugar do número escreva 'FizzBuzz' - X
  Se não for múltiplo de nada, retorna o número
*/

import { FizzBuzz } from "./index";

describe("FizzBuzz", () => {
  it("If the number is divisible by 3, instead of the number write Fizz - X", () => {
    const arrNumbersMultipleOfThree = [3, 6, 9, 12];

    arrNumbersMultipleOfThree.forEach((n) => {
      expect(FizzBuzz(n)).toStrictEqual('Fizz')
    })
  })

  it("If the number is divisible by 5, instead of the number write Buzz - X", () => {
    const arrNumbersMultipleOfFive = [5, 10, 20, 25];

    arrNumbersMultipleOfFive.forEach((n) => {
      expect(FizzBuzz(n)).toStrictEqual('Buzz')
    })
  })

  it("If the number is divisible by 3 and 5, instead of the number write FizzBuzz - X", () => {
    const arrNumbersMultipleOfThreeAndFive = [15, 30, 45];

    arrNumbersMultipleOfThreeAndFive.forEach((n) => {
      expect(FizzBuzz(n)).toStrictEqual('FizzBuzz')
    })
  })

  it(`should return the entry number if it is not divisible by 3 or 5`, () => {
    const arrNumbersNotDivisible = [2, 4, 7, 8]

    arrNumbersNotDivisible.forEach((n) => {
      expect(FizzBuzz(n)).toStrictEqual(n)
    })
  })
})