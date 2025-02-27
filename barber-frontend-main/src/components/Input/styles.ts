import styled, { css } from "styled-components";

import { Tooltip } from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #dddee2;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,.1);
  border: 2px solid transparent;
  color: #666360;
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
    flex: 1;
    border: 0;
    font-size:15px;
    background: transparent;
    color: #3d3f41;

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
