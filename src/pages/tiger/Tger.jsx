import { useState } from "react";
import { useEffect } from "react";
import ButtonHome from "../../components/butaohome/ButtonHome";
import './Tiger.css'
import SinalTiger from "./sinalTiger/SinalTiger";
import Timer from "../../components/Timer"
import Iframe from "../../components/iframe/Iframe";

function Tiger() {
  const [render, setRender] = useState(false)

  useEffect(() => {
    document.title = 'Tiger Fortune';
  })

  function handleButton() {
    setRender(!render)
  }

  return (
    <div className="content" >
      <div className="wrapper">
        <ButtonHome />
        <div className="main">

          <img src="/imgs/Tiger.jpg" alt="" />

          <h1>Tiger</h1>

          {render ? <SinalTiger /> : <h2 className="h2Tiger" >clique no botao para pegar o sinal</h2>}

          {render && <Timer setRender={setRender} />}

          <button
            disabled={render ? true : false}
            onClick={handleButton}
            style={{ backgroundColor: render ? 'red' : '#30B309' }}
          >pegar sinal</button>

          <p className="alerta" >SINAIS SÓ FUNCIONAM NA PLATAFORMA ABAIXO</p>
          <Iframe link={'https://go.aff.brazabet.net/2kdwrzlw'} />
        </div>
      </div>
    </div>
  );
}

export default Tiger;

