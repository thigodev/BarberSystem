"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { formatCurrency, parseCurrencyToNumber, limitDigits } from "../../util/format"
import { Input } from "../../pages/Financeiro/styles"

interface CurrencyInputProps {
  value: string
  onChange: (value: string) => void
  transactionType: "entrada" | "saida"
  placeholder?: string
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({ value, onChange, transactionType, placeholder = "0,00" }) => {
  const [displayValue, setDisplayValue] = useState("")

  // Atualiza o valor de exibição quando o valor externo muda
  useEffect(() => {
    if (value) {
      const numericValue = Number.parseFloat(value)
      setDisplayValue(formatCurrency(numericValue))
    } else {
      setDisplayValue("")
    }
  }, [value])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let inputValue = e.target.value

      // Remove todos os caracteres não numéricos, exceto vírgula
      inputValue = inputValue.replace(/[^\d,]/g, "")

      // Limita o número de dígitos
      inputValue = limitDigits(inputValue)

      // Converte para número
      let numericValue = parseCurrencyToNumber(inputValue)

      // Aplica regras de validação baseadas no tipo de transação
      if (transactionType === "entrada" && numericValue < 0) {
        numericValue = Math.abs(numericValue)
      } else if (transactionType === "saida" && numericValue > 0) {
        numericValue = numericValue * -1
      }

      // Formata para exibição
      const formattedValue = numericValue ? formatCurrency(numericValue) : ""
      setDisplayValue(formattedValue)

      // Passa o valor numérico para o componente pai
      onChange(numericValue.toString())
    },
    [onChange, transactionType],
  )

  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      // Quando o campo recebe foco, se estiver vazio, mostra R$ 0,00
      if (!displayValue) {
        setDisplayValue("R$ 0,00")
      }
    },
    [displayValue],
  )

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      // Quando o campo perde foco, se o valor for zero, limpa o campo
      const numericValue = parseCurrencyToNumber(displayValue)
      if (numericValue === 0) {
        setDisplayValue("")
        onChange("")
      }
    },
    [displayValue, onChange],
  )

  return (
    <Input
      type="text"
      value={displayValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={placeholder}
      style={{
        color: transactionType === "entrada" ? "#22c55e" : "#ef4444",
        fontWeight: "bold",
      }}
    />
  )
}

export default CurrencyInput
