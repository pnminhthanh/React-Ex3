import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import { MenuData } from '../../../model/MenuData';
import './Sider.css';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const menuItemArray = [];
for (let key in MenuData) {
  menuItemArray.push({
    id: key,
    config: MenuData[key],
  });
}
let menuItem = menuItemArray.map(menuElement => (
  <Menu.Item key={menuElement.config.key}>
    <Icon type={menuElement.config.icon} theme={menuElement.config.theme} />
    <span>{menuElement.config.displayText}</span>
    <Link to={menuElement.path} />
  </Menu.Item>
));
const SiderLayout = props => {
  return (
    <Sider collapsible collapsed={props.collapsed} onCollapse={props.toggle}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {menuItem}
      </Menu>
    </Sider>
    // <Layout>
    //   <Sider
    //     collapsible
    //     collapsed={props.collapsed}
    //     onCollapse={props.onCollapse}
    //   >
    //     <div className="logo" />
    //     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
    //       {menuItem}
    //     </Menu>
    //   </Sider>
    //   <Layout>
    //     <Header />
    //     <Content style={{ margin: '0 16px' }}>
    //       <Breadcrumb style={{ margin: '16px 0' }}>
    //         <Breadcrumb.Item>User</Breadcrumb.Item>
    //         <Breadcrumb.Item>Bill</Breadcrumb.Item>
    //       </Breadcrumb>
    //       <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
    //         Bill is a cat.
    //       </div>
    //     </Content>
    //     <Footer />
    //   </Layout>
    // </Layout>
  );
};
export default SiderLayout;
