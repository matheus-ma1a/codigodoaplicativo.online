import React from 'react';
import { useLottie } from "lottie-react";
import cadeado from '../../assets/cadeado.json'

function Cadeado() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: cadeado,
  }

  const style = {
    height: '150px',
  }

  const { View } = useLottie(options, style);

  return ( 
    View
  );
}

export default Cadeado;