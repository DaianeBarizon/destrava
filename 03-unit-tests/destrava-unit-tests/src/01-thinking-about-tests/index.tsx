export function formatPercentage(value: number, options: {minimumFractionDigits: number; percentageSymbol: boolean; }) {
  const { minimumFractionDigits = 2, percentageSymbol = true } = options;

  const result = Intl.NumberFormat("pt-BR", {
    minimumFractionDigits,
  }).format(value);

  console.log(result, 'result')

  if (percentageSymbol) return `${result}%`;

  console.log(percentageSymbol, `${result}%`)

  return result;
}
