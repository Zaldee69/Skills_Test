import React from "react";
import "./Navbar.css";
import { FaUserPlus } from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoFingerPrint } from "react-icons/io5";

const Navbar = ({
  setLoginModal,
  loginModal,
  setRegisterModal,
  registerModal,
}) => {
  return (
    <nav>
      <div className="nav-container">
        <div>
          <h1>Muhammad Rizaldy</h1>
        </div>
        <div>
          <ul className="link-container">
            <li>
              <div className="link">
                <BsFillGrid1X2Fill color="#fff" />
                <a on href="#">
                  Dashboard
                </a>
              </div>
            </li>
            <li>
              <div
                onClick={() => setRegisterModal(!registerModal)}
                className={registerModal ? "link link-active" : "link"}
              >
                <FaUserPlus size="20px" color="#fff" />
                <a href="#">Register</a>
              </div>
            </li>
            <li>
              <div
                onClick={() => setLoginModal(!loginModal)}
                className={loginModal ? "link link-active" : "link"}
              >
                <IoFingerPrint size="20px" color="#fff" />
                <a href="#">Login</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
