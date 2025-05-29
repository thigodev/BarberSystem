// Formatar número para moeda brasileira (R$ 1.234,56)
export const formatCurrency = (value: number | string): string => {
  const numericValue =
    typeof value === "string" ? Number.parseFloat(value.replace(/[^\d,-]/g, "").replace(",", ".")) || 0 : value

  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numericValue)
}

// Converter string formatada para número
export const parseCurrencyToNumber = (formattedValue: string): number => {
  // Remove R$, espaços e pontos, substitui vírgula por ponto
  const numericString = formattedValue.replace(/[R$\s.]/g, "").replace(",", ".")

  return Number.parseFloat(numericString) || 0
}

// Limitar número de dígitos (9 dígitos + 2 decimais = valor máximo 999.999.999,99)
export const limitDigits = (value: string): string => {
  // Remove tudo exceto dígitos e vírgula
  const numericString = value.replace(/[^\d,]/g, "")

  // Separa parte inteira e decimal
  const parts = numericString.split(",")
  const integerPart = parts[0] || ""
  const decimalPart = parts[1] || ""

  // Limita a parte inteira a 9 dígitos e a decimal a 2
  const limitedInteger = integerPart.slice(0, 9)
  const limitedDecimal = decimalPart.slice(0, 2)

  // Reconstrói o número
  return limitedInteger + (limitedDecimal ? "," + limitedDecimal : "")
}
