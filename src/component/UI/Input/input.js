import React from 'react';
import './input.css';

export const Input = props => {
  let inputElement = null;

  switch (props.elementtype) {
    case 'input': {
      inputElement = (
        <input
          className="input"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    }
    case 'textarea': {
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    }
    default:
      inputElement = (
        <input
          className="input"
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};
