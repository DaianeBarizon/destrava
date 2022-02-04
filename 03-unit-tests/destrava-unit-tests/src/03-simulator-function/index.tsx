/* const AVAILABLE_CURRENCIES = ["USD", "EUR"]; */

const EXCHANGE_VALUES = {
  USD: {
    name: "Dólar Americano/Real Brasileiro",
    bid: 5.5
  },
  EUR: {
    name: "Euro/Real Brasileiro",
    bid: 6.2
  }
}

export const simulateExchange = (value: number, currency: "USD" | "EUR") => {
  if (currency in EXCHANGE_VALUES) {
    return {
      name: EXCHANGE_VALUES[currency].name,
      ask: Number(value) * EXCHANGE_VALUES[currency].bid
    }
  } else {
    throw new Error("currency not supported")
  }
}
