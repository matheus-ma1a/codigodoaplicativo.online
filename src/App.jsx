import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import { styled } from 'styled-components';
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'

import Li from './components/Li/Li'
import Footer from './components/footer/Footer'
import ButtonPro from './components/butaoPro/ButtonPro'
import Modal from './components/modal/Modal'
import InstalacaoDoApp from './components/InstalacaoDoApp/InstalacaoDoApp'
import ModalIstalacao from './components/modal/ModalInstalacao'

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 15px;
    width: 10rem;
  }


`

function App() {
  const [closeModal, setCloseModal] = useState(false)
  const [closeModalIos, setCloseModalIos] = useState(false)
  const [closeModalAndroid, setCloseModalAndroid] = useState(false)

  useEffect(() => {
    document.title = 'Deshboard';
  })

  return (
    <div className='wrapper-app' >

      {closeModal && <Modal closeModal={closeModal}><button onClick={() => { setCloseModal(false) }} >Fechar</button></Modal>}

      <div className='img-slide-Home' >
        <img className='imgSLD-Home' src="imgs/imgSlide/1.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/10.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/11.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/2.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/3.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/5.png" alt="" />
        <img className='imgSLD-Home' src="imgs/imgSlide/9.png" alt="" />
      </div>

      <header>
        <p className='p1-Home' >Torne-se PRO</p>
        <ButtonPro />
      </header>

      <ul>
        <Link to={'#'} onClick={() => { setCloseModal(true) }} >
          <Li img='/imgs/mines-pb.jpg' />
        </Link>

        <Link to={'/Tiger'} >
          <Li img='/imgs/Tiger.jpg' />
        </Link>

        <Link to={'#'} onClick={() => { setCloseModal(true) }}>
          <Li img='/imgs/rabbit-black.jpg' />
        </Link>

        <Link to={'#'} onClick={() => { setCloseModal(true) }}>
          <Li img='/imgs/rato-black.jpg' />
        </Link>
        <Link to={'/Touro'} >
          <Li img='/imgs/ox.jpg' />
        </Link>

        <Link to={'#'} onClick={() => { setCloseModal(true) }} >
          <Li img='/imgs/penalty-pc.jpg' />
        </Link>

        <Link to={'#'} onClick={() => { setCloseModal(true) }}>
          <Li img='/imgs/studio-pb.jpg' />
        </Link>

        <Link to={'#'} onClick={() => { setCloseModal(true) }}>
          <Li img='/imgs/bacbo-BLACK.jpg' />
        </Link>

      </ul>
      <InstalacaoDoApp >
        <Buttons>
          <button onClick={() => { setCloseModalIos(true) }} >
            <AiFillApple />IOS
          </button>

          <button onClick={() => { setCloseModalAndroid(true) }} >
            <AiFillAndroid  />ANDROID
          </button>
        </Buttons>
      </InstalacaoDoApp>
      {
        closeModalIos &&
        <ModalIstalacao
          stap1={'Abra o aplicativo no Safari'}
          stap2={'Clique no icone de "compartilhamento" no canto inferior do smartphone'}
          stap3={'Clique em "Adicionar á tela de inicio"'}
          stap4={'Clique em "Adicionar" no canto superior direito'}
        > <button onClick={() => { setCloseModalIos(false) }} >x</button> </ModalIstalacao>
      }
      {
        closeModalAndroid &&
        <ModalIstalacao
          stap1={'Clique no icone de "Mais opções" no canto superior direito'}
          stap2={'Depois clique em "Instalar Aplicativo" ou "Adicionar a tela Inicial"'}
          stap3={'Confirme a ação clicando em "Instalar" no popup que aparece na tela'}
        > <button onClick={() => { setCloseModalAndroid(false) }} >x</button> </ModalIstalacao>
      }
    </div>
  )
}

export default App
