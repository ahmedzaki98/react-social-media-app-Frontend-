import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  });

  const onHandleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onHandleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (err) {
      setErr(err.response.data);
    }
  };
  console.log(err);

  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={onHandleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={onHandleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={onHandleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={onHandleChange}
            />
            {err && err}
            <button className="btn" onClick={onHandleClick}>
              Register
            </button>
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
