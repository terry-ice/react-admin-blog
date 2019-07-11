import Routes from "@/routes/router";
import { Breadcrumb, Icon, Layout, Menu } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import SignOut from "./Right";
const { Header, Sider, Content, Footer } = Layout;

interface State {
  collapsed: boolean;
}
interface Props {
  children: any;
}

class LayoutWrapper extends React.Component<Props, State> {
  state: State = {
    collapsed: false
  };

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{ height: "100vh" }}>
        <Sider
          className="sider"
          trigger={null}
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.onCollapse}
            />
          </div>
          <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
            {Routes.map((route: Routers) => (
              <Menu.Item key={route.title} className="menu-item">
                <Link to={route.path}>
                  <Icon type={route.icon} />
                  <span>{route.title}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header className="header">
            <SignOut />
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutWrapper;
