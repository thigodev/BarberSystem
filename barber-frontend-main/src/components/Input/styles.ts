import styled, { css } from "styled-components";

import { Tooltip } from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  transition: .8s;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color:rgb(0, 0, 0);
      border-color:rgb(255, 255, 255);
      transition: .8s;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #000000;
    `}

  input {

    background-color:rgb(245, 245, 245);

    flex: 1;
    border: 0;
    font-size:15px;
    color:rgb(165, 165, 165);
    padding:1rem;
    border-radius: 8px;

    &::placeholder {
      color:rgb(150, 150, 150);
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
