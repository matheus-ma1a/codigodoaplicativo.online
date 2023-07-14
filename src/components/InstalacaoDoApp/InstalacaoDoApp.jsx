import React from 'react';
import { styled } from 'styled-components';
import { BsCloudArrowDownFill } from 'react-icons/bs'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'


const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;


`

const Buttons = styled.div`
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



function InstalacaoDoApp() {
  return (
    <>
      <Div>
        <BsCloudArrowDownFill style={{ fontSize: '40px' }} />
        <p>Instalacao do App</p>
      </Div>
        <Buttons>
          <button><AiFillApple/>IOS</button>
          <button><AiFillAndroid/>ANDROID</button>
        </Buttons>

    </>
  );
}

export default InstalacaoDoApp;