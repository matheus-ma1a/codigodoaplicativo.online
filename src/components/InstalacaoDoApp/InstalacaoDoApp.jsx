import React, { Children } from 'react';
import { styled } from 'styled-components';
import { BsCloudArrowDownFill } from 'react-icons/bs'


const DivAnt = styled.div`
  margin: 30px 0 50px;
`

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
  

`



function InstalacaoDoApp({children}) {
  return (
    <DivAnt>
      <Div>
        <BsCloudArrowDownFill style={{ fontSize: '40px' }} />
        <p>Instalacao do App</p>
      </Div>
      {children}
    </DivAnt>
  );
}

export default InstalacaoDoApp;