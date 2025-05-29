import styled, { css } from "styled-components"
import { Tooltip } from "../Tooltip"

interface ContainerProps {
  isFocused: boolean
  isErrored: boolean
}

interface LabelProps {
  isChecked: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0;

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #333333;
      transition: color 0.3s ease;
    `}

  svg {
    color: #666666;
  }
`

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;

  input[type="checkbox"] {
    width: 18px;
    height: 18px;
    margin: 0;
    cursor: pointer;
    accent-color: #333333;
    border-radius: 4px;
    
    &:focus {
      outline: 2px solid rgba(51, 51, 51, 0.2);
      outline-offset: 2px;
    }
  }
`

export const Label = styled.label<LabelProps>`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  color: #666666;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s ease;

  &:hover {
    color: #333333;
  }

  ${(props) =>
    props.isChecked &&
    css`
      color: #333333;
      font-weight: 500;
    `}
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 8px;
  
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
