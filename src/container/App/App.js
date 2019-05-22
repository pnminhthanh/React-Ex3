import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import RegisterForm from '../../container/Form/RegisterForm/registerForm';
import LoginForm from '../../container/Form/LoginForm/loginForm';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={LoginForm} />
        </Switch>
      </BrowserRouter>
      {/* <RegisterForm /> */}

      <LoginForm />
    </div>
  );
}

export default App;
