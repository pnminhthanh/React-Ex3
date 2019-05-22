import React, { Component } from 'react';
import './registerForm.css';
import { Input } from '../../../component/UI/Input/input';
import { Button } from '../../../component/UI/Button/button';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerForm: {
        username: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Username',
          },
          value: '',
        },
        password: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Password',
          },
          value: '',
        },
        confirmPassword: {
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: 'Confirm password',
          },
          value: '',
        },
      },
    };
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.registerForm) {
      formElementsArray.push({
        id: key,
        config: this.state.registerForm[key],
      });
    }
    let form = (
      <form>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
          />
        ))}
        <Button elementType="primary" name="register" />
      </form>
    );
    return (
      <div className="register-page">
        <div className="form">{form}</div>
      </div>
    );
  }
}

export default LoginForm;
