// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom'
import { ButtonH } from '../../styled'



function ButtonHome() {
  return (
    <Link to={'/'} >
      <ButtonH>Home</ButtonH>
    </Link>
  );
}

export default ButtonHome;