import React from 'react'
import PropTypes from 'prop-types'
import '../styles/calculator.css'

const Pantalla = ({ number }) => (
  <div className="display">{number}</div>
)

Pantalla.propTypes = {
  number: PropTypes.string,
}
Pantalla.defaultProps = {
  number: '0',
}

export default Pantalla
