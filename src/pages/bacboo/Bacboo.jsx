// import { React } from "react";
import './Bacboo.css'
import ButtonHome from "../../components/butaohome/ButtonHome";
import { useState, } from 'react';
import Timer from "../../components/Timer"
import Frases from "./components/Frases"
import Iframe from '../../components/iframe/Iframe';

function Bacboo() {
  const [render, setRender] = useState(false)
  const [soltaSinal, setSoltaSinal] = useState(false)
  const [cor, setCor] = useState()

  function handle() {
    setSoltaSinal(true)
    setTimeout(() => { setRender(true) }, 5000)
    setCor(randCor)
  }

  function randCor() {
    const cor = ['🟥', '🟥', '🟥', '🟥', '🟦', '🟦', '🟦', '🟦', '🟦',]
    let numeroAleatorio = Math.floor(Math.random() * cor.length);
    return cor[numeroAleatorio]
  }

  return (
    <div className="content">
      <div className="wrapper">
        <ButtonHome />
        <div className="main-bacbo center">
          <div className="analisando">
            <p>{soltaSinal ? <Frases setRender={setRender} /> : '--'}</p>
          </div>
          <div className="iformacoes-bacbo center">
            <div className="cor center">
              <p>cor</p>
              <p>{render ? cor : '--'}</p>
            </div>
            <div className="validade center">
              <p>Válido até</p>
              <p>{render ? <Timer setRender={setRender} setSoltaSinal={setSoltaSinal} /> : '--'}</p>
            </div>
          </div>
        </div>
        <div className="div-bacboo">
          <button
            onClick={handle}
            className='button-bacboo'
            style={{ backgroundColor: render ? 'red' : '#30B309' }}
            disabled={soltaSinal ? true : false}
          >idendentificar sinal</button>
        </div>
        <Iframe link={'https://bit.ly/SinalValidado'} />
      </div>
    </div>
  );
}

export default Bacboo;
