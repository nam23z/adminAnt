import { FileOutlined, PieChartOutlined, UserOutlined,DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import Logo from '../../assets/logo.png';
import styled from 'styled-components';
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const StyledLogo = styled.div`
    width: 200px;
    img{
        width: 100%;
    }
`

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label
  };
}
const items = [
    getItem('Dashboard', '1', <PieChartOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
        getItem('List User', '2'),
        getItem('CRUD User', '3'),
        getItem('User Role', '4'),
    ]),
    getItem('Customers', 'sub2',<FileOutlined/>,[
        getItem('List Customers', '5'),
        getItem('Export File', '6'),
    ]),
    getItem('Products', 'sub3', <TeamOutlined />, [
        getItem('List Product', '7'),
        getItem('CRUD Product', '8')
    ]),
    getItem('Orders', 'sub4', <DesktopOutlined />,[
        getItem('List Orders', '9'),
        getItem('Status Orders', '10')
    ]),
    getItem('Coupon', 'sub5', <DesktopOutlined />,[
        getItem('List Coupon', '11'),
        getItem('CRUD Coupon', '12')
    ]),
  ];

const LayoutPrimary = ({children}) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();

    let navigate = useNavigate()
    const [selectedMenu, setSelectedMenu] = useState("1")
    const pac = (e) => {
      if(e.key === "1"){
        setSelectedMenu("1");
        navigate("/");
      }
      if(e.key === "2"){
        setSelectedMenu("2");
        navigate("/user")
      }
    }
    return (
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical">
            <StyledLogo>
                <img className='logo' src={Logo} alt="logo" />
            </StyledLogo>
            </div>
          <Menu theme="dark" SelectedKeys={selectedMenu} items={items} mode="inline" onClick={pac}></Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {/* {pac} */}
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
            {/* {console.log(items.map((item)=> {return <Breadcrumb.Item>{item.label}</Breadcrumb.Item>}))} */}
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
              <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
}
export default LayoutPrimary;