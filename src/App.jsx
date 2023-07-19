import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import { Buttons, ButaoFechar, ButtonH } from './styled'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import Li from './components/Li/Li'
import ButtonPro from './components/butaoPro/ButtonPro'
import Modal from './components/modal/Modal'
import InstalacaoDoApp from './components/InstalacaoDoApp/InstalacaoDoApp'
import ModalIstalacao from './components/modal/ModalInstalacao'

function App() {
  const [closeModal, setCloseModal] = useState(false)
  const [closeModalIos, setCloseModalIos] = useState(false)
  const [closeModalAndroid, setCloseModalAndroid] = useState(false)
  const [pretoBranco, setpretoBranco] = useState(true)

  useEffect(() => {
    document.title = 'Deshboard';
  })

  return (
    <div className='wrapper-app' >

      {closeModal && <Modal closeModal={closeModal}><ButaoFechar onClick={() => { setCloseModal(false) }} >Fechar</ButaoFechar></Modal>}

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
        {
          pretoBranco ?

            ''

            :

            <div>
              <h1 className='p1-Home' >Torne-se PRO</h1>
              <ButtonPro />
            </div>
        }
      </header>
      <ul>
        <Link to={'/Mines'} onClick={() => { setCloseModal(true) }} >
          <Li img='/imgs/mines.jpg' />
        </Link>

        <Link to={'/Tiger'} >
          <Li img='/imgs/Tiger.jpg' />
        </Link>

        <Link to={'/rabbit'} onClick={() => { setCloseModal(true) }}>
          <Li img={pretoBranco ? '/imgs/rabbit.jpg' : '/imgs/rabbit-black.jpg'} />
        </Link>

        <Link to={'/Rato'} onClick={() => { setCloseModal(true) }}>
          <Li img={pretoBranco ? '/imgs/rato.jpg' : '/imgs/rato-black.jpg'} />
        </Link>
        <Link to={'/Touro'} onClick={() => { setCloseModal(true) }} >
          <Li img={pretoBranco ? '/imgs/ox.jpg' : '/imgs/ox-black.jpg'} />
        </Link>

        <Link to={'/Penalty'} onClick={() => { setCloseModal(true) }} >
          <Li img={pretoBranco ? '/imgs/penalty.jpg' : '/imgs/penalty-black.jpg'} />
        </Link>

        <Link to={'/Futebol'} onClick={() => { setCloseModal(true) }}>
          <Li img={pretoBranco ? '/imgs/studio.jpg' : '/imgs/studio-black.jpg'} />
        </Link>

        <Link to={'/Bacboo'} onClick={() => { setCloseModal(true) }}>
          <Li img={pretoBranco ? '/imgs/bacbo.jpg' : '/imgs/bacbo-black.jpg'} />
        </Link>

      </ul>
      <InstalacaoDoApp >
        <Buttons>
          <ButtonH onClick={() => { setCloseModalIos(true) }} >
            <AiFillApple />IOS
          </ButtonH>

          <ButtonH onClick={() => { setCloseModalAndroid(true) }} >
            <AiFillAndroid />ANDROID
          </ButtonH>
        </Buttons>
      </InstalacaoDoApp>
      {
        closeModalIos &&
        <ModalIstalacao
          stap1={'Abra o aplicativo no Safari'}
          stap2={'Clique no icone de "compartilhamento" no canto inferior do smartphone'}
          stap3={'Clique em "Adicionar á tela de inicio"'}
          stap4={'Clique em "Adicionar" no canto superior direito'}
        > <ButtonH onClick={() => { setCloseModalIos(false) }} >x</ButtonH> </ModalIstalacao>
      }
      {
        closeModalAndroid &&
        <ModalIstalacao
          stap1={'Clique no icone de "Mais opções" no canto superior direito'}
          stap2={'Depois clique em "Instalar Aplicativo" ou "Adicionar a tela Inicial"'}
          stap3={'Confirme a ação clicando em "Instalar" no popup que aparece na tela'}
        > <ButtonH onClick={() => { setCloseModalAndroid(false) }} >x</ButtonH> </ModalIstalacao>
      }
    </div>
  )
}

export default App
