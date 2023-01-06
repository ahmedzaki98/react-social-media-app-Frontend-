import React from "react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const onHandleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handelLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>
            <strong style={{ color: "#aa0014" }}>Z</strong>social
          </h1>
          <h2>New Here?</h2>
          <p>Sign up and discover a great amount of new opportunities.</p>
          <span>Don't have an account?</span>
          <Link to="/register">
            <button className="btn">
              <span>Register</span>
            </button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="username"
              name="username"
              onChange={onHandleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={onHandleChange}
            />
            {err && err}
            <button onClick={handelLogin} className="btn">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
