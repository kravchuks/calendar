import React, { FC } from "react";
import { Layout, Row, Button, Space, Typography } from "antd";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const { Text, Title } = Typography;

const Navbar: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end" align="bottom">
        <Title italic className="header">
          Calendar
        </Title>

        {isAuth ? (
          <Space direction="vertical">
            <Space wrap>
              <Text mark>{user?.username}</Text>
              <Button size="middle" onClick={logout}>
                Logout
              </Button>
            </Space>
          </Space>
        ) : (
          <Space direction="vertical">
            <Space wrap>
              <Button size="middle">Login</Button>
            </Space>
          </Space>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
