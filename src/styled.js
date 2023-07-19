import { styled } from 'styled-components';

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    width: 10rem;
  }

`

export const ButaoFechar = styled.button`
  background-color: transparent;
  font-size: 15px;
  font-weight: 500;
  text-decoration: underline;
  border: none;
`

export const ButtonH = styled.button`
    height: 40px;
    width: 100px;
    border: 0;
    border-radius: 6px;
    color: white;
    background-color: #05a532;
    cursor: pointer;
`