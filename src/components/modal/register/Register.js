import React from "react";
import "./Register.css";
import { BiNetworkChart } from "react-icons/bi";
import { CgCode } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { BsDribbble } from "react-icons/bs";
import Input from "../input/Input";

const Register = ({ shown, setRegisterModal, setLoginModal, loginModal }) => {
  return shown ? (
    <div
      onClick={() => setRegisterModal(!shown)}
      className="register-modal-backdrop "
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="register-container"
      >
        <h1>Register</h1>
        <div className="register-content-wrapper">
          <div className="register-left-content">
            <div className="service-content">
              <BiNetworkChart
                className="service-icon"
                color="#EA2269"
                size="40px"
              />
              <div className="service-title">
                <p>Marketing</p>
                <span>
                  We've created the marketing campaign of the website. It was a
                  very intersting collaboration
                </span>
              </div>
            </div>
            <div className="service-content">
              <CgCode className="service-icon" color="#A12CB4" size="40px" />
              <div className="service-title">
                <p>Fully coded HTML 5</p>
                <span>
                  We've developed with HTML5 and CSS3. The client has access the
                  code using github
                </span>
              </div>
            </div>
            <div className="service-content">
              <FaUserFriends
                className="service-icon"
                color="#00C0D7"
                size="40px"
              />
              <div className="service-title">
                <p>Built Audience</p>
                <span>
                  There is also a Fully Customizable CMS Admin Dashboard for
                  this product
                </span>
              </div>
            </div>
          </div>
          <div className="register-right-content">
            <div className="left-sosial-icons">
              <ImFacebook size="30px" />
              <FaTwitter size="30px" />
              <BsDribbble size="30px" />
            </div>
            <h2>Or be classical</h2>

            <Input />

            <div className="terms-container">
              <input type="checkbox" name="terms" />
              <label for="terms">
                {" "}
                I agreed to <span>terms and condition</span>
              </label>
            </div>
            <button type="submit">Get Started</button>
            <p>
              Already have an account ?{" "}
              <span
                onClick={() => {
                  setRegisterModal(!shown);
                  setLoginModal(!loginModal);
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Register;
