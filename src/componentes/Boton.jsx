import React from 'react'
import PropTypes from 'prop-types'
import '../styles/calculator.css'

const Button = ({ title, onClick, description }) => {
  const equal = {
    height: 'auto',
  }
  if (description === 'doble') {
    return (
      <button style={equal} type="button" onClick={onClick} className="boton_entrada_num" title={description}>{title}</button>
    )
  }
  return (
    <button type="button" onClick={onClick} className="boton_entrada_num" title={description}>{title}</button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  description: PropTypes.string,
}

Button.defaultProps = {
  title: 'Predeterminado',
  description: 'simple',
}

export default Button
