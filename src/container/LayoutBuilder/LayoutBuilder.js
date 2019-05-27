import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Sider from '../../component/UI/Sider/Sider';
import Header from '../../component/UI/Header/Header';
import Footer from '../../component/UI/Footer/Footer';
import { Route, Redirect } from 'react-router-dom';
import UserPage from '../UserPage/UserPage';
import ProductPage from '../ProductPage/Product';

const { Content } = Layout;
export class LayoutBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  collapsedToggleHandler = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('isUserAuthenticated');
    this.props.history.push('/login');
  };

  chooseMenuItem = item => {
    localStorage.setItem('chooseMenuItem', item.key);
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsed={this.state.collapsed}
          toggle={this.collapsedToggleHandler}
          selectedItem={localStorage.chooseMenuItem}
          choose={this.chooseMenuItem}
        />
        <Layout>
          <Header logout={this.logout} />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 580,
            }}
          >
            <Route exact path="/products" component={ProductPage} />
            <Route exact path="/users" component={UserPage} />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
