import { useState } from "react";
import { useEffect } from "react";
import ButtonHome from "../../components/butaohome/ButtonHome";
import SinalTouro from "./SinalTouro";
import Timer from "../../components/Timer"
import Iframe from "../../components/iframe/Iframe";
import { styled } from "styled-components";
import { ButtonH } from "../../styled";

const Img = styled.img`
  width: 200px;
  border-radius: 5px;
  border: 0.1rem solid white;
`

function Touro() {
  const [render, setRender] = useState(false)

  useEffect(() => {
    document.title = 'Ox Fortune';
  })

  function handleButton() {
    setRender(!render)
  }

  return (
    <div className="content" >
      <div className="wrapper">
        <ButtonHome />
        <div className="main">

          <Img  src="/imgs/ox.jpg" alt="" />

          <h1>Ox Fortune</h1>

          {render ? <SinalTouro /> : <h2 className="h2Tiger" >clique no botao para pegar o sinal</h2>}

          {render && <Timer setRender={setRender} />}

          <ButtonH
            disabled={render ? true : false}
            onClick={handleButton}
            style={{ backgroundColor: render ? 'red' : '#30B309' }}
          >pegar sinal</ButtonH>

          <p className="alerta" >SINAIS SÓ FUNCIONAM NA PLATAFORMA ABAIXO</p>
          <Iframe link={'https://bit.ly/funcionandointeligencia'} />
        </div>
      </div>
    </div>
  );
}

export default Touro;