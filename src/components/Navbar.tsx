import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { Layout, Row, Button, Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useActions } from "../hooks/useActions";

const { Text } = Typography;

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end" align="bottom">
        {isAuth ? (
          <Space direction="vertical">
            <Space wrap>
              <Text mark>{user?.username}</Text>
              <Button
                size="middle"
                onClick={logout}
              >
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
