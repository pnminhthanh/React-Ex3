import React from 'react';
import './button.css';

export const Button = props => {
  let buttonElement = null;

  switch (props.elementType) {
    case 'success': {
      buttonElement = <button className="btn btn-success">{props.name}</button>;
      break;
    }
    case 'primary': {
      buttonElement = <button className="btn btn-primary">{props.name}</button>;
      break;
    }
    default: {
      buttonElement = <button className="btn">{props.name}</button>;
      break;
    }
  }

  return <div>{buttonElement}</div>;
};
