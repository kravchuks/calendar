import React from "react";
import { Layout, Row, Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const { Text } = Typography;

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth } = useTypedSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify="end" align="bottom">
        {isAuth ? (
          <Space direction="vertical">
            <Space wrap>
              <Text mark>kravchuk</Text>
              <Button size="middle">Logout</Button>
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
