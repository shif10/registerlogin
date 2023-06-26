import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Signin } from "./components/Signin";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { useState } from "react";
import { ProtectionRoute } from "./layout/ProtectionRoute";
import { ProtectionRouteContent } from "./layout/ProtectionRouteContent";
import { VerfifyMail } from "./components/VerfifyMail";
import { Resetpassword } from "./components/Resetpassword";
import { Resendmail } from "./components/Resendmail";
import { ResetPasswordMail } from "./components/ResetPasswordMail";

function App() {
  const token = localStorage.getItem("token");

  const routes = [
    {
      route: "/home",
      Component: Home,
      isProtected: true,
    },
    {
      route: "/",
      Component: !token ? Signin : Home,
    },
    {
      route: "/signin",
      Component: !token ? Signin : Home,
    },
    {
      route: "/signup",
      Component: !token ? Signup : Home,
    },
    {
      route: "varifymail/:id",
      Component: !token ? VerfifyMail : Home,
    },
    {
      route: "varifymail",
      Component: !token ? VerfifyMail : Signin,
    },
    {
      route: "/resendmail",
      Component: !token ? Resendmail : Signin,
    },
    {
      route: "/resetpasswordMail",
      Component: !token ? ResetPasswordMail : Signin,
    },
    {
      route: "/resetpassword/:id",
      Component: !token ? Resetpassword : Signin,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map(({ route, Component, isProtected = false }) => {
            return (
              <Route
                key={route}
                path={route}
                element={
                  isProtected ? (
                    <ProtectionRoute Component={Component}></ProtectionRoute>
                  ) : (
                    <Component />
                  )
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
