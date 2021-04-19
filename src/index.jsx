/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
// import Boton from './componentes/Boton'
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
      <Container>
        <Row>
          <Col>
            hola
          </Col>
          <Col>
            hola
          </Col>
          <Col>
            hola
          </Col>
          <Col>
            hola
          </Col>
        </Row>
      </Container>
    </div>
  )
}

ReactDOM.render(
  <App />,
  root,
)
