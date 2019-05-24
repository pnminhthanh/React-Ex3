import { Layout, Menu } from 'antd';
import React from 'react';
import './Header.css';
const { Header } = Layout;

const HeaderLayout = props => {
  return (
    // <Header className="header">
    //   <Menu className="menu" theme="dark">
    //     <Menu.Item key="1" onClick={props.click}>
    //       Logout
    //     </Menu.Item>
    //   </Menu>
    // </Header>
    <Header className="header" theme="dark" style={{ padding: 0 }} />
  );
};

export default HeaderLayout;
