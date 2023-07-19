import { useEffect, useState } from "react";
import './Futebol.css'
import { ButtonH } from '../../styled'
import ButtonHome from "../../components/butaohome/ButtonHome";
import Sinal from "./sinal/Sinal";
import Falso from "../../components/false/Falso";
import Timer from "../../components/Timer"
import Iframe from "../../components/iframe/Iframe";

function Futebol() {
  const [control, setControl] = useState(false)
  const [timer, setTimer] = useState(false)

  useEffect(() => {
    document.title = 'Futebol Studio';
  })


  function handleJogar() {
    setControl(true)
    setTimer(true)
  }

  return (
    <div className="content">
      <div className="wrapper">
        <ButtonHome />

        <div className="sinal-Futebol">
          <img className="img-Futebol" src="/imgs/Futebol.png" alt="" />
          <div className="wrapper-entrada">
            {control ? <Sinal /> : <Falso />}
            {timer && <Timer setRender={setTimer} setControl={setControl} />}
            <ButtonH
              onClick={handleJogar}
              style={{ backgroundColor: control ? 'red' : '#30B309' }}
            >jogar</ButtonH>
          </div>
        </div>
        <Iframe link={'https://bit.ly/funcionandointeligencia'} />
      </div>

    </div>

  );
}

export default Futebol;