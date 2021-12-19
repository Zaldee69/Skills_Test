import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Login from "./components/modal/login/Login";
import Register from "./components/modal/register/Register";

function App() {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  return (
    <div className="home-container">
      <Navbar
        registerModal={registerModal}
        setRegisterModal={setRegisterModal}
        setLoginModal={setLoginModal}
        loginModal={loginModal}
      />
      <Login
        shown={loginModal}
        setRegisterModal={setRegisterModal}
        registerModal={registerModal}
        setLoginModal={setLoginModal}
      />
      <Register
        loginModal={loginModal}
        setLoginModal={setLoginModal}
        setRegisterModal={setRegisterModal}
        shown={registerModal}
      />
    </div>
  );
}

export default App;
