import React, { useEffect } from "react";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import { Layout } from "antd";
import "./App.css";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

const App: React.FC = () => {
  const { setAuth, setUser } = useActions();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setAuth(true);
      setUser({ username: localStorage.getItem("username" || "") } as IUser);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
};

export default App;
