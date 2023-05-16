import React from "react";
import { Route, Routes } from "react-router-dom";

import { Button } from "../components";
import { FilmsListPage } from "../pages/private";
import NotFoundPage from "../pages/not-found/not-found";
import { useDispatch } from "react-redux";
import { setLogOutAction } from "../store/actions/auth.actions";

export const PrivateRoutes = {
  init: {
    path: "/",
    element: <FilmsListPage />,
  },
  notFound: {
    path: "*",
    element: <NotFoundPage />,
  },
};

const PrivateRoutesNavigation = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setLogOutAction());
  };

  return (
    <>
      <Button
        style={{
          top: 20,
          right: 20,
          position: "absolute",
        }}
        onClick={onLogout}
      >
        Log out
      </Button>

      <Routes>
        {Object.values(PrivateRoutes).map((el, index) => (
          <Route key={`Private route: ${index}`} {...el} />
        ))}
      </Routes>
    </>
  );
};

export default PrivateRoutesNavigation;
