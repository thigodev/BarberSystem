import styled from 'styled-components'

export const Container = styled.button`
  background: transparent;
  border: 3px solid rgb(255, 255, 255);
  height: 56px;
  border-radius: 40px;
  padding: 0 16px;
  color:rgb(255, 255, 255);
  width: 115%;
  font-size: 18px;
  letter-spacing: 2px;
  font-weight: 700;
  margin-top: 16px;
  
  transition: .3s;


  &:hover{
    transition: .8s;
    background:#FFFFFF;
    color: #000000;
  }
  &:focus {
  outline: none;
}
`
