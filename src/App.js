import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import { Signin } from "./components/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./components/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Signin />}></Route>

          <Route path="/signup" element={<Signup />}></Route>

          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
      ;
    </>
  );
}

export default App;
