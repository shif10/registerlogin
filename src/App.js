import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Signin } from "./components/Signin";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";
import { useState } from "react";
import { ProtectionRoute } from "./layout/ProtectionRoute";

function App() {
  const [user, setLoginUser] = useState({});

  const token = localStorage.getItem("token");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              token ? (
                <Home user={user} />
              ) : (
                <Signin setLoginUser={setLoginUser} />
              )
            }
          ></Route>
          <Route
            exact
            path="/signin"
            element={
              token ? (
                <Home user={user} />
              ) : (
                <Signin setLoginUser={setLoginUser} />
              )
            }
          ></Route>

          <Route path="/signup" element={<Signup />}></Route>

          <Route
            path="/home"
            element={
              token ? (
                <Home user={user} />
              ) : (
                <Signin setLoginUser={setLoginUser} />
              )
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
