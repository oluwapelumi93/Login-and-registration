import React, { useState } from "react";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="login">
          <h2>Login</h2>
        </label>
        <label htmlFor="email"></label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="lumi@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password"></label>
        <input
          value={password}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <div style={{ display: "flex" }}>
          <input
            type="radio"
            name="RememberMe"
            id="RememberMe"
            value="RememberMe"
          />
          <label className="Rem-btn" htmlFor="RememberMe">
            Remember Me
          </label>
        </div>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
      <button
        className="Link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an acoount? Register here
      </button>
    </div>
  );
};
