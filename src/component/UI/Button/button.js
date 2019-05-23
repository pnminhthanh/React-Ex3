import React from 'react';
import './button.css';

export const Button = props => {
  let buttonElement = null;

  switch (props.elementType) {
    case 'success': {
      buttonElement = (
        <button
          className="btn btn-success"
          disabled={props.disabled}
          onClick={props.click}
        >
          {props.name}
        </button>
      );
      break;
    }
    case 'primary': {
      buttonElement = (
        <button
          className="btn btn-primary"
          disabled={props.disabled}
          onClick={props.click}
        >
          {props.name}
        </button>
      );
      break;
    }
    default: {
      buttonElement = (
        <button className="btn" disabled={props.disabled} onClick={props.click}>
          {props.name}
        </button>
      );
      break;
    }
  }

  return <div className="submitButton">{buttonElement}</div>;
};
