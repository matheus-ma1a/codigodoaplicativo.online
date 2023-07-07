// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const FrasesComponent = () => {
  const [frases,] = useState(['Primeira frase', 'Segunda frase', 'Terceira frase']);
  const [fraseAtual, setFraseAtual] = useState(frases[0]);
  const [indiceFrase, setIndiceFrase] = useState(1);

  const exibirProximaFrase = () => {
    if (indiceFrase < frases.length) {
      setFraseAtual(frases[indiceFrase]);
      setIndiceFrase(indiceFrase + 1);
    }
  };

  setTimeout(exibirProximaFrase, 1000);

  return (
    <>
      {fraseAtual}
    </>
  );
};

export default FrasesComponent;

