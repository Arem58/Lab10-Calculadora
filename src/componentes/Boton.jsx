import React from "react";
import { FiDelete } from "react-icons/fi";
import PropTypes from "prop-types";
import "../styles/calculator.css";

const Button = (props) => {
  if (props.description === "imagen") {
    return (
      <button
        type="button"
        onClick={props.onClick}
        className="boton_entrada_num"
        title={props.description}
        data-keycode={props.keycode}
      >
        <FiDelete />
      </button>
    );
  }
  return (
    <button
      type="button"
      onKeyDown={props.onKeyDown}
      onClick={props.onClick}
      className="boton_entrada_num"
      title={props.description}
      data-keycode={props.keycode}
    >
      {props.title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  description: PropTypes.string,
  keycode: PropTypes.string.isRequired,
};

Button.defaultProps = {
  title: "Predeterminado",
  description: "simple",
};

export default Button;
