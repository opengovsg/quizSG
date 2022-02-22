export const convertDecimalToPercent = (decimal: string): string =>
  `${Math.round(parseFloat(decimal) * 100)}%`
