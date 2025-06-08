import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  border: 0.75px solid rgb(255, 255, 255);
  background: none;
  height: 56px;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 15px;
  letter-spacing: 2px;
  font-weight: 700;
  color: white;

  width: 100%;
  font-weight: 500;
  margin-top: 50px;
  transition: .4s;


  &:hover{
    transition: .6s;
    background:rgb(255, 255, 255);
    color:rgb(0, 0, 0);
  }
`
