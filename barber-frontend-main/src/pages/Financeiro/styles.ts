import styled from "styled-components"

export const Container = styled.div`
  min-height: 100vh;
  background: #2c2c2c;
`

export const Header = styled.div`
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 20px 0;
  background: #000000;
  border-radius: 0rem 0rem 3rem 3rem;
`

export const HeaderContent = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid #dcdde1;
  border-radius: 12px;
  padding: 12px 18px;
  color: #dcdde1;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;
  text-decoration: none;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: #dcdde1;
    color: #000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(220, 221, 225, 0.3);
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #dcdde1;
  font-size: 28px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;

  svg {
    width: 32px;
    height: 32px;
  }
`

export const MonthSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #dcdde1;

  svg {
    width: 20px;
    height: 20px;
  }
`

export const Content = styled.div`
  width: 80%;
  margin: 44px auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FinancialSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
`

export const SummaryCard = styled.div<{ type: string }>`
  background: ${(props) => {
    switch (props.type) {
      case "entrada":
        return "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
      case "saida":
        return "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
      case "saldo-positivo":
        return "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)"
      case "saldo-negativo":
        return "linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
      default:
        return "linear-gradient(135deg, #6b7280 0%, #4b5563 100%)"
    }
  }};
  padding: 2rem;
  border-radius: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      color: rgba(255, 255, 255, 0.9);
      font-size: 16px;
      font-weight: 500;
      font-family: 'Montserrat', sans-serif;
    }

    strong {
      color: white;
      font-size: 28px;
      font-weight: 700;
      font-family: 'Montserrat', sans-serif;
    }
  }

  svg {
    width: 36px;
    height: 36px;
    color: rgba(255, 255, 255, 0.8);
  }
`

export const MainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

export const TransactionForm = styled.div`
  background: #484848;
  padding: 2rem;
  border-radius: 1.2rem;
  box-shadow: 2px 1px 12px 4px rgba(0, 0, 0, 0.12);

  h2 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1.5rem;
  }
`

export const TransactionList = styled.div`
  background: #484848;
  padding: 2rem;
  border-radius: 1.2rem;
  box-shadow: 2px 1px 12px 4px rgba(0, 0, 0, 0.12);

  h2 {
    color: white;
    font-size: 24px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 1.5rem;
  }

  .transactions-container {
    max-height: 400px;
    overflow-y: auto;
    
    ::-webkit-scrollbar {
      width: 8px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #404143;
      border-radius: 20px;
    }
  }

  .empty-message {
    color: #999591;
    text-align: center;
    padding: 3rem 0;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }
`

export const FormGroup = styled.div`
  margin-bottom: 1rem;

  label {
    display: block;
    color: white;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 0.5rem;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: #717171;
  border: 1px solid #404143;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #999591;
  }

  &:focus {
    outline: none;
    border-color: #22c55e;
  }
`

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  background: #717171;
  border: 1px solid #404143;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #22c55e;
  }

  option {
    background: #717171;
    color: white;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: #717171;
  border: 1px solid #404143;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  min-height: 80px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &::placeholder {
    color: #999591;
  }

  &:focus {
    outline: none;
    border-color: #22c55e;
  }
`

export const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
  border: none;
  border-radius: 8px;
  padding: 14px 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
  }
`

export const TransactionItem = styled.div<{ type: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #717171;
  border-radius: 8px;
  margin-bottom: 0.75rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }

  .transaction-info {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .transaction-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${(props) =>
      props.type === "entrada"
        ? "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)"
        : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"};
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 18px;
      height: 18px;
      color: white;
    }
  }

  .transaction-details {
    display: flex;
    flex-direction: column;
    gap: 4px;

    strong {
      color: white;
      font-size: 16px;
      font-weight: 600;
      font-family: 'Montserrat', sans-serif;
    }

    span {
      color: #999591;
      font-size: 14px;
      font-family: 'Montserrat', sans-serif;
    }
  }

  .transaction-actions {
    display: flex;
    align-items: center;
    gap: 12px;

    .amount {
      color: ${(props) => (props.type === "entrada" ? "#22c55e" : "#ef4444")};
      font-weight: 700;
      font-size: 16px;
      font-family: 'Montserrat', sans-serif;
    }

    .remove-btn {
      background: transparent;
      border: none;
      color: #ef4444;
      padding: 8px;
      border-radius: 4px;
      transition: all 0.2s;

      svg {
        width: 16px;
        height: 16px;
      }

      &:hover {
        background: rgba(239, 68, 68, 0.1);
        transform: scale(1.1);
      }
    }
  }
`

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
