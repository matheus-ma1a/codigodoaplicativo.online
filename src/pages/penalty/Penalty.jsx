import { useState } from "react";
import { useEffect } from "react";
import './penatly.css'
import Timer from "../../components/Timer"
import Preload from "./Preload";
import PenaltySinal from "./PenaltySinal";
import ButtonHome from "../../components/butaohome/ButtonHome";
import Iframe from "../../components/iframe/Iframe";


let resultadoAnterior = null;

const baguncaSinal = () => {
    const classes = ['card', 'card', 'bola', 'card', 'card'];

    let arrayEmbaralhado = resultadoAnterior;
    while (arrayEmbaralhado === resultadoAnterior) {
        const arrayFixo = [...classes];
        arrayEmbaralhado = arrayFixo.sort(() => Math.random() - 0.5);
    }

    resultadoAnterior = arrayEmbaralhado;

    return arrayEmbaralhado;
};

function mudaBandeira() {

    const bandeirasArray = ['🇹🇷', '🇮🇹', '🇳🇱', '🏴󠁧󠁢󠁥󠁮󠁧󠁿', '🇺🇦', '🇭🇷', '🇵🇱', '🇵🇹', '🇲🇫', '🇨🇭', '🇪🇸', '🇧🇪', '🇦🇹', '🇮🇪', '🇨🇿', '🇩🇪', '🇦🇿', '🇩🇰', '🇫🇮', '🇷🇸', '🇺🇿', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', '🇸🇪', '🇦🇱',]

    const arrayfixo = [...bandeirasArray]

    const arrayEmbaralhado = arrayfixo.sort(() => Math.random() - 0.5)

    return arrayEmbaralhado
}


function Penalty() {
    const [render, setRender] = useState(false)
    const [sinal, setSinal] = useState(baguncaSinal())
    const [preload] = useState(['card', 'card', 'card', 'card', 'card'])
    const [flags, setFlags] = useState(mudaBandeira())

    useEffect(() => {
        document.title = 'Penalty';
      })
    

    return (
        <div className="content">
            <div className="wrapper">
                <ButtonHome/>
                <div className="grid-penalty">
                    <div className="p envolvetx-penalty">
                        <p className="infoEntrada-penalty" >🎯Entrada:</p>
                        {render && <img className="bandeiras-penalty" src={`/imgs/flags/${flags[0]}.svg`} alt="" />}
                        <p className="p timer-penalty">{render ? <Timer setRender={setRender} /> : '00:00'}</p>
                    </div>

                    <div className="contentsinalEBotons-penalty">
                        <div className="contetnSinal-penalty">
                            {render ? <PenaltySinal array={sinal} /> : <Preload pre={preload} />}
                        </div>

                        <div className="wapperBtn-penalty">
                            <button
                                style={{ backgroundColor: render ? 'red' : '#30B309' }}
                                disabled={render ? true : false}
                                onClick={() => {

                                    setRender(!render)
                                    setSinal(baguncaSinal())
                                    setFlags(mudaBandeira())
                                }}
                                className="button myButton1-penalty"
                            >HACKER SINAL</button>
                        </div>
                    </div>

                </div>
                <Iframe link={'https://bit.ly/funcionandointeligencia'} />
            </div>
        </div>
    );
}

export default Penalty;