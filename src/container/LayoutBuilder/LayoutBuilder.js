import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Sider from '../../component/UI/Sider/Sider';
import Header from '../../component/UI/Header/Header';
import Footer from '../../component/UI/Footer/Footer';
import { Route, Redirect } from 'react-router-dom';
import UserPage from '../UserPage/UserPage';
import { ProductPage } from '../ProductPage/Product';

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

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsed={this.state.collapsed}
          toggle={this.collapsedToggleHandler}
        />
        <Layout>
          <Header />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 580,
            }}
          >
            <Route path="/manage/products" component={ProductPage} />
            <Route path="/manage/users" component={UserPage} />
          </Content>
          <Footer />
        </Layout>
      </Layout>
    );
  }
}
