import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import { RegisterForm } from '../../component/Form/RegisterForm/registerForm';
import { LoginForm } from '../../component/Form/LoginForm/loginForm';
import Page404 from '../../component/Page404/page404';
import { LayoutBuilder } from '../../container/LayoutBuilder/LayoutBuilder';
import { UserPage } from '../UserPage/UserPage';
import { ProductPage } from '../ProductPage/Product';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/404" component={Page404} />
          <PrivateRoute path="/" component={LayoutBuilder} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.isUserAuthenticated === 'true' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default App;
