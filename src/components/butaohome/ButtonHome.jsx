// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from 'react-router-dom'
import './ButtonHome.css'

function ButtonHome() {
  return ( 
    <Link to={'/'} >
    <button>Home</button>
  </Link>
   );
}

export default ButtonHome;