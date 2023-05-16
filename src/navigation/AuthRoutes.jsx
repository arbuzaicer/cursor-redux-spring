import React from "react";
import { Route, Routes } from "react-router-dom";

import { ForgotPasswordPage, SignInPage, SignUpPage } from "../pages/auth";
import NotFoundPage from "../pages/not-found/not-found";

export const AuthRoutes = {
  init: {
    path: "/",
    element: <SignInPage />,
  },
  singIn: {
    path: "/sign-in",
    element: <SignInPage />,
  },
  singUp: {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  forgotPassword: {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  notFound: {
    path: "*",
    element: <NotFoundPage />,
  },
};

const AuthRoutesNavigation = () => {
  return (
    <Routes>
      {Object.values(AuthRoutes).map((el, index) => (
        <Route key={`Key for authorized routes is: ${index}`} {...el} />
      ))}
    </Routes>
  );
};

export default AuthRoutesNavigation;
