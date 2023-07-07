import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mines from './pages/MInes/Mines.jsx'
import Penalty from './pages/penalty/Penalty.jsx'
import Futebol from './pages/futebol/Futebol.jsx'
import Tiger from './pages/tiger/Tger.jsx'
import Bacboo from './pages/bacboo/Bacboo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/mines',
    element: <Mines/>
  },
  {
    path: '/penalty',
    element: <Penalty/>
  },
  {
    path: '/Futebol',
    element: <Futebol/>
  },
  {
    path: '/Tiger',
    element: <Tiger/>
  },
  {
    path: '/Bacboo',
    element: <Bacboo/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
