import React, { Dispatch, FC } from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { rules } from "../untils/rules";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const LoginForm: FC = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submit = () => {
    dispatch(AuthActionCreators.login(userName, password));
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
