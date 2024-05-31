import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../CSS/Register.css";
import register from "./Images/register.png";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  // to store value in local storage
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/");
  };

  return (
    <>
      <div className="r-background"></div>
      <div className="registerPage">
        <div className="registerContent">
          <div className="reg-top">
            <h1>
              Movies Mania 🍿
            </h1>
          </div>
          <div className="reg-data">
            
            <p>
              Register with your Email📧 and get exclusive🎁 access to our Movies.🪙
            </p>
          </div>
        </div>
        <div className="registerWindow">
          <div className="registerHead">
            <img src={register} alt="register icon" />
            <h2>Create Account</h2>
          </div>
          <div className="registerDetails">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Username</label>
              <input
                type="text"
                value={input.name}
                name="name"
                id="name"
                required
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={input.email}
                id="email"
                required
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={input.password}
                id="email"
                required
                onChange={(e) =>
                  setInput({ ...input, [e.target.name]: e.target.value })
                }
              />
              <span className="btnLink">
                <button type="submit">Register</button>
                {/* <input type="button" value="Login" /> */}
                <p>
                  Already have an account?<a href="/">Login Here</a>
                </p>
              </span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
