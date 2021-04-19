import React from 'react'
import PropTypes from 'prop-types'
import '../styles/calculator.scss'

const Button = ({ title, onClick }) => (
  <button type="button" onClick={onClick} className="boton_entrada_num">{title}</button>
)

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  title: 'Predeterminado',
}

export default Button
