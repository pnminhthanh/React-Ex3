import React, { Component } from 'react';
import './loginForm.css';
import { Input } from '../../../component/UI/Input/input';
import { Button } from '../../../component/UI/Button/button';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginForm: {
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
      },
    };
  }

  inputChangeHandler = (e, identifier) => {
    console.log(e.target.value + ' ' + identifier);
    const updatedLoginForm = { ...this.state.loginForm };
    var updatedInputElement = { ...updatedLoginForm[identifier] };
    updatedInputElement.value = e.target.value;
    updatedLoginForm[identifier] = updatedInputElement;
    this.setState({ loginForm: updatedLoginForm });
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.loginForm) {
      formElementsArray.push({
        id: key,
        config: this.state.loginForm[key],
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
            changed={e => {
              this.inputChangeHandler(e, formElement.id);
            }}
          />
        ))}
        <Button elementType="success" name="login" />
        <div>
          <p>
            Not registered? <a href="/register">Create an account</a>
          </p>
        </div>
      </form>
    );
    return (
      <div className="login-page">
        <div className="form">{form}</div>
      </div>
    );
  }
}

export default RegisterForm;
