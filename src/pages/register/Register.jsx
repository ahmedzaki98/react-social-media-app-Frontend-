import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
            <input type="text" placeholder="Name" />
            <button className="btn">Register</button>
          </form>
        </div>
        <div className="register-left">
          <h1>
            <strong style={{ color: "#aa0014" }}>Z</strong>social
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span className="qus_span">Do you have an account?</span>
          <Link to="/login">
            <button className="btn">
              <span>Login</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
