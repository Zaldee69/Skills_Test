import React from "react";
import "./Input.css";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiLock } from "react-icons/fi";

const Input = () => {
  return (
    <div>
      <form className="input-container">
        <div className="input-wrapper">
          <label for="fullname">
            <FaRegUserCircle color="#5B5B5B" size="25px" />
          </label>
          <input placeholder="Fullname" name="fullname" type="text"></input>
        </div>
        <div className="input-wrapper">
          <label for="email">
            <FaRegEnvelope color="#5B5B5B" size="25px" />
          </label>
          <input placeholder="Email" name="email" type="email"></input>
        </div>
        <div className="input-wrapper">
          <label for="password">
            <FiLock color="#5B5B5B" size="25px" />
          </label>
          <input placeholder="Password" name="password" type="password"></input>
        </div>
      </form>
    </div>
  );
};

export default Input;
