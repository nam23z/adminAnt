import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  AntDesignOutlined,
  TranslationOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Input,
  Row,
  Col,
  Avatar,
  Space,
} from "antd";
import { useState } from "react";
import Logo from "../../assets/logo.png";
import styled from "styled-components";
import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const StyledLogo = styled.div`
  width: 200px;
  img {
    width: 100%;
  }

`;
const StyledLayout = styled.div`
  .searchHeader{
      width: 80%;
      vertical-align: middle;
  }
  .rightHeader{
    width: 100%;
  }
`
// search
const { Search } = Input;

//layout
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("List User", "2"),
  ]),
  getItem("Customers", "sub2", <FileOutlined />, [
    getItem("List Customers", "3"),
  ]),
  getItem("Products", "sub3", <TeamOutlined />, [
    getItem("List Product", "4"),
  ]),
  getItem("Orders", "sub4", <DesktopOutlined />, [
    getItem("List Orders", "5"),
  ]),
  getItem("Coupon", "sub5", <DesktopOutlined />, [
    getItem("List Coupon", "6"),
  ]),
];

const LayoutPrimary = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  let navigate = useNavigate();
  const pac = (e) => {
    if (e.key === "1") {
      navigate("/");
    }
    if (e.key === "2") {
      navigate("/user");
    }
  };
  return (
    <StyledLayout>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <div className="demo-logo-vertical">
            <StyledLogo>
              <img className="logo" src={Logo} alt="logo" />
            </StyledLogo>
          </div>
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={['sub1']}
            items={items}
            mode="inline"
            onClick={pac}
          ></Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Row align="middle">
              <Col span={6} offset={14}>
                  <Search className="searchHeader" placeholder="input search text" enterButton />
              </Col>
              <Col span={4}>
                <Space className="rightHeader" align="center">
                  <QuestionCircleOutlined />
                  <BellOutlined />
                  <div className="iconUser">
                    <Avatar size="small" icon={<AntDesignOutlined />}/>
                    Ahihi
                  </div>
                  <TranslationOutlined />
                </Space>
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb
              style={{
                margin: "16px 0",
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
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </StyledLayout>
  );
};
export default LayoutPrimary;
