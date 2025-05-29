import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3333",
})

export const apiKey = "95e51a37c6e94e1e95e165534241601"

// ==================== WEATHER API ====================
interface forecastEndpointParams {
  cityName: string
  days?: string
}

const forecastEndpoint = ({ cityName, days }: forecastEndpointParams): string =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=${days}&aqi=no&alerts=no`
const locationsEndpoint = ({ cityName }: forecastEndpointParams): string =>
  `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`

const apiCall = async (endPoint: string): Promise<any> => {
  const options = {
    method: "GET",
    url: endPoint,
  }
  try {
    const response = await axios.request(options)
    return response.data
  } catch (err) {
    console.log("error", err)
    return null
  }
}

export const fetchWeatherForecast = async ({ cityName, days }: forecastEndpointParams): Promise<any> => {
  return await apiCall(forecastEndpoint({ cityName, days }))
}

export const fetchLocations = async ({ cityName }: forecastEndpointParams): Promise<any> => {
  return await apiCall(locationsEndpoint({ cityName }))
}

// ==================== FINANCIAL API (LocalStorage) ====================

export interface Transaction {
  id: string
  type: "entrada" | "saida"
  amount: number
  description: string
  category: string
  date: string
  user_id: string
  created_at: string
  updated_at: string
}

// Chave para localStorage
const getStorageKey = (userId: string) => `@BarberSystem:transactions_${userId}`

// Gerar ID único
const generateId = () => `transaction_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

// Salvar todas as transações no localStorage
const saveToStorage = (userId: string, transactions: Transaction[]) => {
  try {
    localStorage.setItem(getStorageKey(userId), JSON.stringify(transactions))
    console.log("✅ Transações salvas no localStorage:", transactions.length)
  } catch (error) {
    console.error("❌ Erro ao salvar no localStorage:", error)
  }
}

// Carregar todas as transações do localStorage
const loadFromStorage = (userId: string): Transaction[] => {
  try {
    const data = localStorage.getItem(getStorageKey(userId))
    const transactions = data ? JSON.parse(data) : []
    console.log("📂 Transações carregadas do localStorage:", transactions.length)
    return transactions
  } catch (error) {
    console.error("❌ Erro ao carregar do localStorage:", error)
    return []
  }
}

// Criar nova transação
export const createTransaction = async (
  transactionData: Omit<Transaction, "id" | "created_at" | "updated_at">,
): Promise<Transaction> => {
  try {
    const now = new Date().toISOString()
    const transaction: Transaction = {
      ...transactionData,
      id: generateId(),
      created_at: now,
      updated_at: now,
    }

    // Carregar transações existentes
    const existingTransactions = loadFromStorage(transactionData.user_id)

    // Adicionar nova transação
    const updatedTransactions = [...existingTransactions, transaction]

    // Salvar no localStorage
    saveToStorage(transactionData.user_id, updatedTransactions)

    console.log("✅ Transação criada:", transaction)
    return transaction
  } catch (error) {
    console.error("❌ Erro ao criar transação:", error)
    throw error
  }
}

// Buscar transações (com filtro opcional por mês/ano)
export const getTransactions = async (userId: string, month?: number, year?: number): Promise<Transaction[]> => {
  try {
    const allTransactions = loadFromStorage(userId)

    // Se não há filtros, retorna todas
    if (month === undefined || year === undefined) {
      return allTransactions
    }

    // Filtrar por mês e ano
    const filteredTransactions = allTransactions.filter((transaction) => {
      const transactionDate = new Date(transaction.date)
      return transactionDate.getMonth() === month && transactionDate.getFullYear() === year
    })

    console.log(`📊 Transações filtradas (${month + 1}/${year}):`, filteredTransactions.length)
    return filteredTransactions
  } catch (error) {
    console.error("❌ Erro ao buscar transações:", error)
    return []
  }
}

// Atualizar transação
export const updateTransaction = async (
  transactionId: string,
  userId: string,
  updates: Partial<Transaction>,
): Promise<Transaction> => {
  try {
    const allTransactions = loadFromStorage(userId)
    const transactionIndex = allTransactions.findIndex((t) => t.id === transactionId)

    if (transactionIndex === -1) {
      throw new Error("Transação não encontrada")
    }

    // Atualizar transação
    const updatedTransaction = {
      ...allTransactions[transactionIndex],
      ...updates,
      updated_at: new Date().toISOString(),
    }

    allTransactions[transactionIndex] = updatedTransaction
    saveToStorage(userId, allTransactions)

    console.log("✅ Transação atualizada:", updatedTransaction)
    return updatedTransaction
  } catch (error) {
    console.error("❌ Erro ao atualizar transação:", error)
    throw error
  }
}

// Deletar transação
export const deleteTransaction = async (transactionId: string, userId: string): Promise<void> => {
  try {
    const allTransactions = loadFromStorage(userId)
    const filteredTransactions = allTransactions.filter((t) => t.id !== transactionId)

    if (filteredTransactions.length === allTransactions.length) {
      throw new Error("Transação não encontrada")
    }

    saveToStorage(userId, filteredTransactions)
    console.log("✅ Transação deletada:", transactionId)
  } catch (error) {
    console.error("❌ Erro ao deletar transação:", error)
    throw error
  }
}

// Buscar resumo financeiro mensal
export const getMonthlyFinancialSummary = async (
  userId: string,
  month: number,
  year: number,
): Promise<{
  entradas: number
  saidas: number
  saldo: number
  totalTransactions: number
}> => {
  try {
    const transactions = await getTransactions(userId, month, year)

    const entradas = transactions.filter((t) => t.type === "entrada").reduce((sum, t) => sum + t.amount, 0)

    const saidas = transactions.filter((t) => t.type === "saida").reduce((sum, t) => sum + t.amount, 0)

    const summary = {
      entradas,
      saidas,
      saldo: entradas - saidas,
      totalTransactions: transactions.length,
    }

    console.log("📊 Resumo financeiro:", summary)
    return summary
  } catch (error) {
    console.error("❌ Erro ao calcular resumo financeiro:", error)
    return { entradas: 0, saidas: 0, saldo: 0, totalTransactions: 0 }
  }
}

// Limpar todos os dados (útil para debug)
export const clearAllTransactions = (userId: string): void => {
  localStorage.removeItem(getStorageKey(userId))
  console.log("🗑️ Todas as transações foram removidas")
}

// Exportar dados como JSON (para backup)
export const exportTransactionsAsJSON = (userId: string): string => {
  const transactions = loadFromStorage(userId)
  return JSON.stringify(transactions, null, 2)
}

// Importar dados de JSON (para restaurar backup)
export const importTransactionsFromJSON = (userId: string, jsonData: string): void => {
  try {
    const transactions = JSON.parse(jsonData)
    saveToStorage(userId, transactions)
    console.log("📥 Transações importadas:", transactions.length)
  } catch (error) {
    console.error("❌ Erro ao importar transações:", error)
    throw error
  }
}

export default api
