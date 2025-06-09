"use client"

import type React from "react"
import { useState, useCallback, useEffect } from "react"
import { Link } from "react-router-dom"
import { format } from "date-fns"

import {
  FiArrowLeft,
  FiPlus,
  FiMinus,
  FiDollarSign,
  FiTrendingUp,
  FiTrendingDown,
  FiCalendar,
  FiTrash2,
  FiRefreshCw,
  FiDownload,
} from "react-icons/fi"

import { useAuth } from "../../hooks/Auth"
import {
  createTransaction,
  getTransactions,
  deleteTransaction,
  exportTransactionsAsJSON,
  type Transaction,
} from "../../services/api"
import CurrencyInput from "../../components/CurrencyInput"
import { formatCurrency } from "../../util/format"

import {
  Container,
  Header,
  HeaderContent,
  Content,
  FinancialSummary,
  SummaryCard,
  MainContent,
  TransactionForm,
  TransactionList,
  FormGroup,
  Input,
  Select,
  TextArea,
  Button,
  TransactionItem,
  MonthSelector,
  BackButton,
  Title,
} from "./styles"

export const Financeiro: React.FC = () => {
  const { user } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const [newTransaction, setNewTransaction] = useState({
    type: "entrada" as "entrada" | "saida",
    amount: "",
    description: "",
    category: "",
    date: new Date().toISOString().split("T")[0],
  })

  const categories = {
    entrada: ["Corte de Cabelo", "Barba", "Sobrancelha", "Produtos", "Outros"],
    saida: ["Aluguel", "Energia", "Água", "Produtos", "Equipamentos", "Outros"],
  }

  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  // Carregar transações
  const loadTransactions = useCallback(async () => {
    if (!user?.id) return

    setIsLoading(true)
    try {
      console.log(`🔄 Carregando transações para ${user.name} (${selectedMonth + 1}/${selectedYear})`)
      const data = await getTransactions(user.id, selectedMonth, selectedYear)
      setTransactions(data)
      console.log("✅ Transações carregadas:", data.length)
    } catch (error) {
      console.error("❌ Erro ao carregar transações:", error)
      setTransactions([])
    } finally {
      setIsLoading(false)
    }
  }, [user?.id, selectedMonth, selectedYear])

  // Carregar transações quando mudar mês/ano ou usuário
  useEffect(() => {
    loadTransactions()
  }, [loadTransactions])

  // Adicionar transação
  const addTransaction = useCallback(async () => {
    if (!newTransaction.amount || !newTransaction.description || !newTransaction.category) {
      alert("Por favor, preencha todos os campos!")
      return
    }

    if (!user?.id) {
      alert("Usuário não encontrado!")
      return
    }

    try {
      console.log("💾 Salvando nova transação...")

      // Garantir que o valor seja positivo para entrada e negativo para saída
      let amount = Number.parseFloat(newTransaction.amount)
      if (newTransaction.type === "entrada" && amount < 0) {
        amount = Math.abs(amount)
      } else if (newTransaction.type === "saida" && amount > 0) {
        amount = -amount
      }

      const transactionData = {
        type: newTransaction.type,
        amount: Math.abs(amount), // Sempre salva como positivo, o tipo define se é entrada ou saída
        description: newTransaction.description,
        category: newTransaction.category,
        date: newTransaction.date,
        user_id: user.id,
      }

      const savedTransaction = await createTransaction(transactionData)

      // Recarregar transações para mostrar a nova
      await loadTransactions()

      // Limpar formulário
      setNewTransaction({
        type: "entrada",
        amount: "",
        description: "",
        category: "",
        date: new Date().toISOString().split("T")[0],
      })

      console.log("✅ Transação adicionada com sucesso!")
    } catch (error) {
      console.error("❌ Erro ao adicionar transação:", error)
      alert("Erro ao salvar transação. Tente novamente.")
    }
  }, [newTransaction, user?.id, loadTransactions])

  // Remover transação
  const removeTransaction = useCallback(
    async (id: string) => {
      if (!user?.id) return

      try {
        console.log("🗑️ Removendo transação:", id)
        await deleteTransaction(id, user.id)

        // Recarregar transações
        await loadTransactions()

        console.log("✅ Transação removida com sucesso!")
      } catch (error) {
        console.error("❌ Erro ao remover transação:", error)
        alert("Erro ao remover transação. Tente novamente.")
      }
    },
    [user?.id, loadTransactions],
  )

  // Exportar dados
  const exportData = useCallback(() => {
    if (!user?.id) return

    try {
      const jsonData = exportTransactionsAsJSON(user.id)
      const blob = new Blob([jsonData], { type: "application/json" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `transacoes_${user.name}_${new Date().toISOString().split("T")[0]}.json`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)

      console.log("📥 Dados exportados com sucesso!")
    } catch (error) {
      console.error("❌ Erro ao exportar dados:", error)
    }
  }, [user?.id, user?.name])

  const calculateTotals = () => {
    const entradas = transactions.filter((t) => t.type === "entrada").reduce((sum, t) => sum + t.amount, 0)
    const saidas = transactions.filter((t) => t.type === "saida").reduce((sum, t) => sum + t.amount, 0)

    return {
      entradas,
      saidas,
      saldo: entradas - saidas,
    }
  }

  const { entradas, saidas, saldo } = calculateTotals()

  return (
    <Container>
      <Header>
        <HeaderContent>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link to="/dashboard">
              <BackButton>
                <FiArrowLeft />
                Voltar
              </BackButton>
            </Link>
            <Title>
              <FiDollarSign />
              Controle Financeiro
            </Title>
          </div>

          <MonthSelector>
            <button
              onClick={loadTransactions}
              style={{
                background: "transparent",
                border: "none",
                color: "#dcdde1",
                cursor: "pointer",
                padding: "8px",
              }}
              disabled={isLoading}
              title="Recarregar dados"
            >
              <FiRefreshCw style={{ animation: isLoading ? "spin 1s linear infinite" : "none" }} />
            </button>

            <button
              onClick={exportData}
              style={{
                background: "transparent",
                border: "none",
                color: "#dcdde1",
                cursor: "pointer",
                padding: "8px",
              }}
              title="Exportar dados"
            >
              <FiDownload />
            </button>

            <Select value={selectedMonth} onChange={(e) => setSelectedMonth(Number(e.target.value))}>
              {months.map((month, index) => (
                <option key={index} value={index}>
                  {month}
                </option>
              ))}
            </Select>
            <Select value={selectedYear} onChange={(e) => setSelectedYear(Number(e.target.value))}>
              {[2024, 2025, 2026].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </MonthSelector>
        </HeaderContent>
      </Header>

      <Content>
        <FinancialSummary>
          <SummaryCard type="entrada">
            <div>
              <span>Entradas</span>
              <strong>{formatCurrency(entradas)}</strong>
            </div>
            <FiTrendingUp />
          </SummaryCard>

          <SummaryCard type="saida">
            <div>
              <span>Saídas</span>
              <strong>{formatCurrency(saidas)}</strong>
            </div>
            <FiTrendingDown />
          </SummaryCard>

          <SummaryCard type={saldo >= 0 ? "saldo-positivo" : "saldo-negativo"}>
            <div>
              <span>Saldo</span>
              <strong>{formatCurrency(saldo)}</strong>
            </div>
            <FiDollarSign />
          </SummaryCard>
        </FinancialSummary>

        <MainContent>
          <TransactionForm>
            <h2>Nova Transação</h2>

            <FormGroup>
              <label>Tipo</label>
              <Select
                value={newTransaction.type}
                onChange={(e) =>
                  setNewTransaction({
                    ...newTransaction,
                    type: e.target.value as "entrada" | "saida",
                    category: "",
                  })
                }
              >
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <label>Valor</label>
              <CurrencyInput
                value={newTransaction.amount}
                onChange={(value) => setNewTransaction({ ...newTransaction, amount: value })}
                transactionType={newTransaction.type}
                placeholder="R$ 0,00"
              />
            </FormGroup>

            <FormGroup>
              <label>Categoria</label>
              <Select
                value={newTransaction.category}
                onChange={(e) =>
                  setNewTransaction({
                    ...newTransaction,
                    category: e.target.value,
                  })
                }
              >
                <option value="">Selecione uma categoria</option>
                {categories[newTransaction.type].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </FormGroup>

            <FormGroup>
              <label>Descrição</label>
              <TextArea
                placeholder="Descreva a transação..."
                value={newTransaction.description}
                onChange={(e) =>
                  setNewTransaction({
                    ...newTransaction,
                    description: e.target.value,
                  })
                }
              />
            </FormGroup>

            <FormGroup>
              <label>Data</label>
              <Input
                type="date"
                value={newTransaction.date}
                onChange={(e) =>
                  setNewTransaction({
                    ...newTransaction,
                    date: e.target.value,
                  })
                }
              />
            </FormGroup>

            <Button onClick={addTransaction}>
              <FiPlus />
              Adicionar Transação
            </Button>
          </TransactionForm>

          <TransactionList>
            <h2>
              Transações de {months[selectedMonth]} {selectedYear}
            </h2>

            <div className="transactions-container">
              {isLoading ? (
                <p className="empty-message">Carregando transações...</p>
              ) : transactions.length === 0 ? (
                <p className="empty-message">Nenhuma transação encontrada para este período.</p>
              ) : (
                transactions.map((transaction) => (
                  <TransactionItem key={transaction.id} type={transaction.type}>
                    <div className="transaction-info">
                      <div className="transaction-icon">
                        {transaction.type === "entrada" ? <FiPlus /> : <FiMinus />}
                      </div>
                      <div className="transaction-details">
                        <strong>{transaction.description}</strong>
                        <span>
                          {transaction.category} • {format(new Date(transaction.date), "dd/MM/yyyy")}
                        </span>
                      </div>
                    </div>
                    <div className="transaction-actions">
                      <span className="amount">
                        {transaction.type === "entrada" ? "+" : "-"}
                        {formatCurrency(transaction.amount)}
                      </span>
                      <button onClick={() => removeTransaction(transaction.id)} className="remove-btn">
                        <FiTrash2 />
                      </button>
                    </div>
                  </TransactionItem>
                ))
              )}
            </div>
          </TransactionList>
        </MainContent>
      </Content>
    </Container>
  )
}
