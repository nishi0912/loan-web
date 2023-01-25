import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { UserOutlined, BuildOutlined, HomeOutlined } from "@ant-design/icons";
import "../../App.css";
import { Route } from "react-router";
import { history } from "../../Utils/history";
import _ from "lodash";

const { Content, Sider } = Layout;

// console.log({ history })
const AdminScreen = (props) => {
  const { component: Component, type, ...rest } = props;

  const [TabKey, setTabKey] = useState(type);

  const handleMenu = (e) => {
    setTabKey(e.key);
    const route = _.lowerCase(e.key);
    history.push(`/admin/${route}`);
  };

  return (
    <Layout className="admin-layout">
      <Sider collapsible="true" className="admin-sider">
        <Menu
          theme="dark"
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
          className="admin-menu"
          onClick={handleMenu}
          defaultOpenKeys={[TabKey]}
          selectedKeys={[TabKey]}
        >
          <Menu.Item
            key={"Builders"}
            title={"Hello"}
            icon={<BuildOutlined />}
            className={
              TabKey === "Builders" ? "admin-selected" : "admin-unselected"
            }
          >
            Builders
          </Menu.Item>
          <Menu.Item
            key={"Properties"}
            icon={<HomeOutlined />}
            className={
              TabKey === "Properties" ? "admin-selected" : "admin-unselected"
            }
          >
            Property
          </Menu.Item>
          <Menu.Item
            key={"Users"}
            icon={<UserOutlined />}
            className={
              TabKey === "Users" ? "admin-selected" : "admin-unselected"
            }
          >
            Users
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content className="admin-contents">
          <Route
            {...rest}
            render={(props) => {
              return <Component {...props} />;
            }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminScreen;
