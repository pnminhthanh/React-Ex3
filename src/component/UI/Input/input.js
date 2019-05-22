import React from 'react';
import './input.css';

export const Input = props => {
  let inputElement = null;

  switch (props.elementtype) {
    case 'input': {
      inputElement = (
        <input className="input" {...props.elementConfig} value={props.value} />
      );
      break;
    }
    case 'textarea': {
      inputElement = <textarea {...props.elementConfig} value={props.value} />;
      break;
    }
    default:
      inputElement = (
        <input className="input" {...props.elementConfig} value={props.value} />
      );
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};
