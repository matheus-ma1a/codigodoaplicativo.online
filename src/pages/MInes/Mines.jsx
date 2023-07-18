import { useState, useEffect } from "react";
import './Mines.css'
import { ButtonH } from "../../styled";
import MinerGrid from "./MinerGrid/MineGrid";
import MinesPreload from "./MinerPreload/MinesPreload";
import Timer from "../../components/Timer"
import ButtonHome from "../../components/butaohome/ButtonHome";
import Iframe from "../../components/iframe/Iframe";


const circulosEstrelas = [
  '/imgs/fechado.png', 'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png', 'imgs/fechado.png',

  'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png', 'imgs/fechado.png', 'imgs/fechado.png',

  'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png', 'imgs/fechado.png', 'imgs/star.png',

  'imgs/fechado.png', 'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png', 'imgs/fechado.png',

  'imgs/fechado.png', 'imgs/fechado.png', 'imgs/fechado.png', 'imgs/star.png', 'imgs/fechado.png',
]



const loadSinal = () => {
  const arrayfixo = [...circulosEstrelas]
  const arrayEmbaralhado = arrayfixo.sort(() => Math.random() - 0.5)
  return arrayEmbaralhado
}

function Mines() {
  const [render, setRender] = useState(false)
  const [sinal, setSinal] = useState()

  useEffect(() => {
    document.title = 'MI-Mines';
  })


  function handle() {
    setRender(!render)
    setSinal(loadSinal())
  }

  return (
    <div className="content">
      <div className="wrapper">
        <ButtonHome />
        <div className="main-Mines">
          <div className="info-play-Mines">
            <p className="tentativas-Mines">3 tentativas</p>
            <p className="qtminas-Mines">💣5 minas</p>
            <p className="valido-ate-Mines">Válido ate:</p>
            <div className="wapper-hora-Mines">{render ? <Timer setRender={setRender} /> : '00:00'}</div>
            <p className="entreNoJogo-Mines">👇Entre no Jogo Abaixo👇</p>
          </div>

          <div className="wpper-sinal-Mines">
            <div className="grid-Mines">
              {
                render ? <MinerGrid sinal={sinal} /> : <MinesPreload sinal={circulosEstrelas} sinalFixo={circulosEstrelas} />
              }
            </div>

            <div className="wapperBtn-Mines">
              <ButtonH
                disabled={render ? true : false}
                style={{ backgroundColor: render ? 'red' : '#30B309' }}
                onClick={handle}
                className="geraSinal-Mines">HACKEAR SINAL</ButtonH>
            </div>
          </div>
        </div>
        <Iframe link={'https://go.aff.brazabet.net/n4eptmnd'} />
      </div>
    </div>

  )
}

export default Mines;
