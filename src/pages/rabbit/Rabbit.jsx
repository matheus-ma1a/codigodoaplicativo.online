import { useState } from "react";
import { useEffect } from "react";
import ButtonHome from "../../components/butaohome/ButtonHome";
import SinalRabbit from "./SinalRabbit";
import Timer from "../../components/Timer"
import Iframe from "../../components/iframe/Iframe";

function Rabbit() {
  const [render, setRender] = useState(false)

  useEffect(() => {
    document.title = 'Rabbit Fortune';
  })

  function handleButton() {
    setRender(!render)
  }

  return (
    <div className="content" >
      <div className="wrapper">
        <ButtonHome />
        <div className="main">

          <img src="/imgs/rabbit.jpg" alt="" />

          <h1>Rabbit</h1>

          {render ? <SinalRabbit /> : <h2 className="h2Tiger" >clique no botao para pegar o sinal</h2>}

          {render && <Timer setRender={setRender} />}

          <button
            disabled={render ? true : false}
            onClick={handleButton}
            style={{ backgroundColor: render ? 'red' : '#30B309' }}
          >pegar sinal</button>

          <p className="alerta" >SINAIS SÓ FUNCIONAM NA PLATAFORMA ABAIXO</p>
          <Iframe link={'https://bomdebet.com/?r=pnroqglq'} />
        </div>
      </div>
    </div>
  );
}

export default Rabbit;