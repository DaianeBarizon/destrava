### Desafio

Implemente uma função em Javascript que atenda os requisitos técnicos descritos no arquivo problem.md.

Para implementação e realização dos testes considere valores fixos abaixo:

```javascript
const AVAILABLE_CURRENCIES = ["USD", "EUR"];

const EXCHANGE_VALUES = {
  USD: {
    name: "Dólar Americano/Real Brasileiro",
    bid: 5.5
  },
  EUR: {
    name: "Euro/Real Brasileiro",
    bid: 6.2
  }
};
```

A função deve retornar um objeto com essa estrutura:

```javascript
{
  name: "Dólar Americano/Real Brasileiro",
  ask: 12260;
}
```