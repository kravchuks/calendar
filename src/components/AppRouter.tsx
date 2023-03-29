import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router";

import { RouteNames, privateRoutes, publicRoutes } from "../router";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  
  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.EVENT} replace />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      <Route path="*" element={<Navigate to={RouteNames.LOGIN} replace />} />
    </Routes>
  );
};

export default AppRouter;
