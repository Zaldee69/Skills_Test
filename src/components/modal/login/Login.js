import "./Login.css";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import Input from "../input/Input";

const Login = ({ shown, setLoginModal, setRegisterModal, registerModal }) => {
  return shown ? (
    <div
      onClick={() => {
        setLoginModal(!shown);
      }}
      className="login-modal-backdrop"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="login-container"
      >
        <div className="login-head">
          <h2>Login</h2>
          <div className="social-icons">
            <ImFacebook2 size="20px" color="#fff" />
            <FaTwitter size="20px" color="#fff" />
            <FaGooglePlusG size="30px" color="#fff" />
          </div>
        </div>
        <div className="login-body">
          <h2>Or Be Classical</h2>
          <Input />
          <button className="submit-btn" href="#" type="submit">
            Let's Go
          </button>
          <p>
            Dont have an account?{" "}
            <span
              onClick={() => {
                setLoginModal(!shown);
                setRegisterModal(!registerModal);
              }}
            >
              Regsiter
            </span>
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default Login;
