import React from 'react';
import { styled } from 'styled-components';


const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(24, 24, 24);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 60px 15px ;

  ul{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }

  li{
    display: flex;
    gap: 15px;
  }

`

const Numbers = styled.div`
  min-height: 30px;
  min-width: 30px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

function ModalIstalacao({stap1,stap2,stap3,stap4,children}) {
  return (
    <ModalStyled>
      <ul>
        <li><Numbers>1</Numbers>{stap1}</li>
        <li><Numbers>2</Numbers>{stap2}</li>
        <li><Numbers>3</Numbers>{stap3}</li>
        { stap4 && <li><Numbers>4</Numbers>{stap4}</li>}
      </ul>
      {children}
    </ModalStyled>
  );
}

export default ModalIstalacao;