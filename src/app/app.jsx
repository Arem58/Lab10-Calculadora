import React, { useState } from 'react'
import Boton from '../componentes/Boton'
import Pantalla from '../componentes/Pantalla'
import '../styles/calculator.css'
import '../../sass/custom.css'

const newNumber = 'NA'
const App = () => {
  const [numero, setNumero] = useState('0')
  const changeScreen = () => {
    setNumero(newNumber)
  }
  const noBorders = {
    padding: '0',
    margin: '0',
  }
  return (
    <div className="calculator">
      <Pantalla number={numero} />
      <div style={noBorders} className="container">
        {/* Teclas C, +/-, %, ÷ */}
        <div className="row g-0 mt-3">
          <div className="col d-flex justify-content-center">
            <Boton onClick={changeScreen} title="C" />
          </div>
          <div className="col d-flex justify-content-center">
            <Boton onClick={changeScreen} title="÷" />
          </div>
          <div className="col d-flex justify-content-center">
            <Boton onClick={changeScreen} title="X" />
          </div>
          <div className="col d-flex justify-content-center">
            <Boton onClick={changeScreen} title="%" />
          </div>
        </div>
        {/* Teclas 7, 8, 9, X */}
        <div className="row g-0 mt-1">
          <div className="col d-flex justify-content-center">
            <Boton onClick={changeScreen} title="7" />
          </div>
          <div className="col d-flex justify-content-center">
            <Boton onClick={changeScreen} title="8" />
          </div>
          <div className="col d-flex justify-content-center">
            <Boton onClick={changeScreen} title="9" />
          </div>
          <div className="col d-flex justify-content-center">
            <Boton onClick={changeScreen} title="+" />
          </div>
        </div>
        {/* Teclas 1, 2, 3, 4, 5, 6, = */}
        <div className="row g-0 mt-1">
          <div className="col-9">
            <div className="row g-0">
              <div className="col-4 d-flex justify-content-center">
                <Boton onClick={changeScreen} title="4" />
              </div>
              <div className="col-4 d-flex justify-content-center">
                <Boton onClick={changeScreen} title="5" />
              </div>
              <div className="col-4 d-flex justify-content-center">
                <Boton onClick={changeScreen} title="6" />
              </div>
              <div className="col-4 d-flex justify-content-center mt-1">
                <Boton onClick={changeScreen} title="1" />
              </div>
              <div className="col-4 d-flex justify-content-center mt-1">
                <Boton onClick={changeScreen} title="2" />
              </div>
              <div className="col-4 d-flex justify-content-center mt-1">
                <Boton onClick={changeScreen} title="3" />
              </div>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center">
            <Boton description="doble" onClick={changeScreen} title="=" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
