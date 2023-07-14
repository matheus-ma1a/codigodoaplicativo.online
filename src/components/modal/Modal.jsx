import React, { useState } from 'react'
import { styled } from 'styled-components';
import ButtonPro from '../butaoPro/ButtonPro';
import Cadeado from '../cadeado/Cadeado';



function Modal({ closeModal, children }) {


  const ModalStyled = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(17, 1, 1, 0.897);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
  
  `
  const DivInternaModal = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #252525;
    padding: 5rem 0;
    width: 90%;
    text-align: center;
    border-radius: 10px;
    gap: 20px;

    p{
      color: #999999;
    }

    div{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }

    @media (max-width: 768px) {
      gap: 15px;
      h1{
        font-size: 1.5rem;
      }

    }
  `
  if (closeModal) {
    return (
      <>
        <ModalStyled>
          <DivInternaModal>
            <div>
              <Cadeado />
              <h1>JOGO BLOQUEADO</h1>
            </div>
            <p>Adquira a versão PRO para ter acesso e lucrar muito!</p>
            <ButtonPro></ButtonPro>
            {children}
          </DivInternaModal>
        </ModalStyled>
      </>
    );
  } else {
    return null;
  }
}

export default Modal;