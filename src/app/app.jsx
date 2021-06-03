import React, { useState } from 'react'
import Boton from '../componentes/Boton'
import Pantalla from '../componentes/Pantalla'
import '../styles/calculator.css'
import '../../sass/custom.css'
import {
  getMapKeys, setNumber, deleteNumber, getResult,
} from '../Scripts/calculatorfunc'

// const newNumber = 'NA'
const App = () => {
  const [numero, setNumero] = useState('0')
  const [display, setDisplay] = useState('0')
  const [operacion, setOperacion] = useState(null)
  const [resultado, setResultado] = useState(null)
  // const maxlength = 10
  /* const changeScreen = () => {
    setNumero(newNumber)
  } */
  const noBorders = {
    padding: '0',
    margin: '0',
  }
  const divHeight = {
    height: '80px',
    alignItems: 'center',
  }
  /* const divHeight2 = {
    alignItems: 'center',
    height: '160px',
  } */
  const handleKey = (keycode) => {
    if (keycode.type === 'input') {
      const newNumber = setNumber(keycode.value, numero, 10)
      setNumero(newNumber)
      setDisplay(newNumber)
    } else if (keycode.type === 'operation') {
      setOperacion(keycode.value)
      setResultado(numero)
      setNumero('0')
    } else if (keycode.type === 'clear') {
      setNumero('0')
      setDisplay('0')
      setOperacion(null)
      setResultado(null)
    } else if (keycode.type === 'result') {
      if (resultado !== null) {
        const resultadoOP = getResult(resultado, numero, operacion)
        setNumero(resultadoOP)
        setDisplay(resultadoOP)
        setResultado(null)
        console.log(resultadoOP)
      }
    } else if (keycode.type === 'delete') {
      const newNumber = deleteNumber(numero)
      setNumero(newNumber)
      setDisplay(newNumber)
    } else if (keycode.type === 'toggle') {
      setNumero((`${parseFloat(numero) * -1}`))
      setDisplay((`${parseFloat(numero) * -1}`))
    }
  }
  const handleClick = (event) => {
    // console.log(event.target.dataset.keycode)
    const keycode = getMapKeys.getButtonTyoe(event.target.dataset.keycode)
    handleKey(keycode)
  }
  const handleKeyDonw = (event) => {
    const keycode = getMapKeys.getButtonTyoe(event.key.dataset.keycode)
    handleKey(keycode)
  }
  return (
    <div className="calculator">
      <Pantalla number={display} />
      <div style={noBorders} className="container">
        {/* Teclas C, +/-, %, ÷ */}
        <div className="row g-0">
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="67" onKeyDown={handleKeyDonw} onClick={handleClick} title="C" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="47" onKeyDown={handleKeyDonw} onClick={handleClick} title="÷" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="221" onKeyDown={handleKeyDonw} onClick={handleClick} title="x" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="8" onKeyDown={handleKeyDonw} description="imagen" onClick={handleClick} title="%" />
          </div>
        </div>
        {/* Teclas 7, 8, 9, X */}
        <div className="row g-0 ">
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="55" onKeyDown={handleKeyDonw} onClick={handleClick} title="7" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="56" onKeyDown={handleKeyDonw} onClick={handleClick} title="8" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="57" onKeyDown={handleKeyDonw} onClick={handleClick} title="9" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="88" onKeyDown={handleKeyDonw} onClick={handleClick} title="%" />
          </div>
        </div>
        {/* Teclas 7, 8, 9, X */}
        <div className="row g-0 ">
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="52" onKeyDown={handleKeyDonw} onClick={handleClick} title="4" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="53" onKeyDown={handleKeyDonw} onClick={handleClick} title="5" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="54" onKeyDown={handleKeyDonw} onClick={handleClick} title="6" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="187" onKeyDown={handleKeyDonw} onClick={handleClick} title="+" />
          </div>
        </div>
        {/* Teclas 1, 2, 3, 4, 5, 6, = */}
        <div className="row g-0 ">
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="49" onKeyDown={handleKeyDonw} onClick={handleClick} title="1" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="50" onKeyDown={handleKeyDonw} onClick={handleClick} title="2" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="51" onKeyDown={handleKeyDonw} onClick={handleClick} title="3" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="189" onKeyDown={handleKeyDonw} onClick={handleClick} title="-" />
          </div>
        </div>
        <div className="row g-0 ">
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="84" onKeyDown={handleKeyDonw} onClick={handleClick} title="⁺∕₋" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="48" onKeyDown={handleKeyDonw} onClick={handleClick} title="0" />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="190" onKeyDown={handleKeyDonw} onClick={handleClick} title="." />
          </div>
          <div className="col d-flex justify-content-center" style={divHeight}>
            <Boton keycode="13" onKeyDown={handleKeyDonw} onClick={handleClick} title="=" />
          </div>
        </div>
        {/*
        <div className="row g-0 ">
          <div className="col-9">
            <div className="row g-0">
              <div className="col-4 d-flex justify-content-center" style={divHeight}>
                <Boton keycode="49" onClick={handleClick} title="1" />
              </div>
              <div className="col-4 d-flex justify-content-center" style={divHeight}>
                <Boton keycode="50" onClick={handleClick} title="2" />
              </div>
              <div className="col-4 d-flex justify-content-center" style={divHeight}>
                <Boton keycode="51" onClick={handleClick} title="3" />
              </div>
              <div className="row g-0">
                <div className="col-4 d-flex justify-content-center" style={divHeight}>
                  <Boton keycode="84" onClick={handleClick} title="⁺∕₋" />
                </div>
                <div className="col-4 d-flex justify-content-center" style={divHeight}>
                  <Boton keycode="48" onClick={handleClick} title="0" />
                </div>
                <div className="col-4 d-flex justify-content-center" style={divHeight}>
                  <Boton keycode="190" onClick={handleClick} title="." />
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex justify-content-center" style={divHeight2}>
            <Boton keycode="13" description="doble" onClick={handleClick} title="=" />
          </div>
        </div>
        */}
      </div>
    </div>
  )
}

export default App
