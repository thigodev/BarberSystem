import styled, { css } from "styled-components";

import { Tooltip } from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: baseline;

  label{

    font-size: 20px;
  }
  div{
    padding-top: 12px;
}
  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      font-size: 32px;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #38ada9;
      border-color: #38ada9;
      transition: 0.8s;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #38ada9;

    `}


  input {
    border:transparent;
    border: 0;
    font-size: 25px;
    background: transparent;
    color: #3d3f41;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #2196F3;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
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
`;
