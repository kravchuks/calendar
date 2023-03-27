import React, { FC } from "react";
import { Layout, Row, Card } from "antd";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" className="h100">
        <Card title="Login" style={{ width: 300 }}>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
