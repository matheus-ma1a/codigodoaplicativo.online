// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FrasesComponent = () => {
  const [frases,] = useState(['Analisando o codigo', 'Injetando algoritimo', 'Hakeando...','--']);
  const [fraseAtual, setFraseAtual] = useState(frases[0]);
  const [indiceFrase, setIndiceFrase] = useState(1);

  const exibirProximaFrase = () => {
    if (indiceFrase < frases.length) {
      setFraseAtual(frases[indiceFrase]);
      setIndiceFrase(indiceFrase + 1);
    }
  };

  setTimeout(exibirProximaFrase, 1500);

  return (
    <>
      {fraseAtual}
    </>
  );
};

export default FrasesComponent;

