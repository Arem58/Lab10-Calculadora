/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla'
import './styles/calculator.scss'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = document.getElementById('root')
const newNumber = 'NA'
const App = () => {
  const [numero, setNumero] = useState('0')
  const changeScreen = () => {
    setNumero(newNumber)
  }

  return (
    <div className="calculator">
      <Pantalla number={numero} />
      <div>
        {/* Teclas C, +/-, %, ÷ */}
        <div className="row g-0">
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="÷" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="X" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="%" />
            </div>
          </div>
        </div>
        {/* Teclas 7, 8, 9, X */}
        <div className="row g-0">
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="7" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="8" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="9" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="+" />
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
          <div className="col d-flex">
            <div className="espacioBoton">
              <Boton onClick={changeScreen} title="C" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  root,
)
