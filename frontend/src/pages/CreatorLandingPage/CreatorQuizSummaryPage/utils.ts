export const convertDecimalToPercent = (decimal: string): string =>
  `${Math.round(parseFloat(decimal) * 100)}%`

export const generateWeblinkDisplay = (quizId: string): void => {
  const url = `${window.location.origin}/${quizId}`
  if (
    window.confirm(
      `Here is the link to the quiz for taker: ${url}. Click "OK" to open the quiz in a new tab, or "CANCEL" to not do so.`,
    )
  ) {
    window.open(url)
  }
}
