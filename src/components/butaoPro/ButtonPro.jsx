import React, { PureComponent } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.a`
	padding: 10px 30px;
  min-width: 20rem;
  height: 50px;
  margin-top: 20px;
  font-size: 1.2rem;
	font-weight: 600;
	border: none;
	border-radius: 10px;
	background: rgb(7,202,121);
	background: radial-gradient(circle, #069b5d 9%, #1ca12c 61%);
	display: flex;
	justify-content: center;
	cursor: pointer;


  animation: myAnim 3s linear 2s infinite normal forwards;
  @keyframes myAnim {
	0% {
		animation-timing-function: ease-out;
		transform: scale(1);
		transform-origin: center center;
	}

	10% {
		animation-timing-function: ease-in;
		transform: scale(0.91);
	}

	17% {
		animation-timing-function: ease-out;
		transform: scale(0.98);
	}

	33% {
		animation-timing-function: ease-in;
		transform: scale(0.87);
	}

	45% {
		animation-timing-function: ease-out;
		transform: scale(1);
	}
}
`

function ButtonPro() {
	return (
		<ButtonStyled href='https://pepper.com.br/checkout/index.html?p=60231&o=65165' >Adiquira o plano Pro</ButtonStyled>
	);
}

export default ButtonPro;