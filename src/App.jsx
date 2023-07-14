import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'

import Li from './components/Li/Li'
import Footer from './components/footer/Footer'
import ButtonPro from './components/butaoPro/ButtonPro'
import Modal from './components/modal/Modal'
import InstalacaoDoApp from './components/InstalacaoDoApp/InstalacaoDoApp'

function App() {
  const [closeModal, setCloseModal] = useState(false)

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
      <InstalacaoDoApp />
      <Footer />
    </div>
  )
}

export default App
