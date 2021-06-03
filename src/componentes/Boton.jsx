import React from 'react'
import { FiDelete } from 'react-icons/fi'
import PropTypes from 'prop-types'
import '../styles/calculator.css'

const Button = ({
  title, onClick, description, keycode, onKeyDown,
}) => {
  if (description === 'imagen') {
    return (
      <button type="button" onClick={onClick} className="boton_entrada_num" title={description} data-keycode={keycode}>
        <FiDelete onClick={onClick} />
      </button>
    )
  }
  return (
    <button type="button" onKeyDown={onKeyDown} onClick={onClick} className="boton_entrada_num" title={description} data-keycode={keycode}>{title}</button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  description: PropTypes.string,
  keycode: PropTypes.string.isRequired,
}

Button.defaultProps = {
  title: 'Predeterminado',
  description: 'simple',
}

export default Button
