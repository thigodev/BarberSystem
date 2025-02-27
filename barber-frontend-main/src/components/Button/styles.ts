import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: #FFFFFF;
  border: 2px solid rgb(255, 255, 255);
  height: 56px;
  border-radius: 10px;
  padding: 0 16px;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  color:rgb(0, 0, 0);
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: .4s;


  &:hover{
    transition: .6s;
    background:rgb(0, 0, 0);
    color:rgb(255, 255, 255);
  }
`
