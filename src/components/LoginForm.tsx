import React, { FC, useState } from "react";
import { Form, Input, Button } from "antd";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { rules } from "../utils/rules";
import { useActions } from "../hooks/useActions";

const LoginForm: FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();

  const submit = () => {
    login(userName, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input.Password
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="on"
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
