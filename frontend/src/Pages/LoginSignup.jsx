import React, { Children, useState } from "react";
import "./CSS/LoginSignup.css";
function LoginSignup() {
  const [state, setState] = useState("Login");
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
    email: "",
  });
  const Changehandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log(formdata);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    console.log(formdata);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "SignUp" ? (
            <input
              name="username"
              value={formdata.username}
              onChange={Changehandler}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            ""
          )}
          <input
            name="email"
            value={formdata.email}
            onChange={Changehandler}
            type="email"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={formdata.password}
            onChange={Changehandler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "SignUp" ? (
          <p className="loginsignup-login">
            Already have an account
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login Here
            </span>
          </p>
        ) : (
          ""
        )}
        {state === "Login" ? (
          <p className="loginsignup-login">
            Create an account?
            <span
              onClick={() => {
                setState("SignUp");
              }}
            >
              Click Here
            </span>
          </p>
        ) : (
          ""
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
