import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [name, setName] = useState("");
  const [Last, setLast] = useState("");
  const [Inst, setInst] = useState("");
  const [Dept, setDept] = useState("");
  const [Pos, setPos] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="login">
          <h2>Sign up</h2>
        </label>
        <label className="what" htmlFor="login">
          <h3>What type of researcher are you?</h3>
        </label>
        <div className="name" style={{ display: "flex" }}>
          <div>
            <label htmlFor="name"></label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="name"
              id="name"
              placeholder="First Name "
            />
          </div>
          <div>
            <label htmlFor="name"></label>
            <input
              onChange={(e) => setLast(e.target.value)}
              value={Last}
              type="name"
              name="name"
              id="name"
              placeholder="Last Name "
            />
          </div>
        </div>
        <div className="name" style={{ display: "flex" }}>
          <label htmlFor="email"></label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
          />
          <label htmlFor="password"></label>
          <input
            value={password}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </div>
        <div className="name" style={{ display: "flex" }}>
          <div>
            <input
              type="radio"
              name="sector"
              id="Rem"
              value="RememberMe"
            ></input>
            <label htmlFor="RememberMe">Academic or Student</label>
          </div>
          <div>
            <input
              className="shift2"
              type="radio"
              name="sector"
              id="Rem"
              value="RememberMe"
            ></input>
            <label htmlFor="RememberMe">Corporate,Govt, Or NGO Person</label>
          </div>
        </div>
        <div className="name" style={{ display: "flex" }}>
          <div>
            <input
              type="radio"
              name="Profession"
              id="Rem"
              value="RememberMe"
            ></input>
            <label htmlFor="RememberMe">Medical</label>
          </div>
          <div>
            <input
              className="shift1"
              type="radio"
              name="Profession"
              id="Rem"
              value="RememberMe"
            ></input>
            <label htmlFor="RememberMe">Not a researcher</label>
          </div>
        </div>
        <div className="name" style={{ display: "flex" }}>
          <div>
            <label htmlFor="name"></label>
            <input
              onChange={(e) => setInst(e.target.value)}
              value={Inst}
              name="name"
              id="name"
              placeholder="Institution, Company "
            />
          </div>
          <div>
            <label htmlFor="name"></label>
            <input
              onChange={(e) => setDept(e.target.value)}
              value={Dept}
              name="name"
              id="name"
              placeholder="Deparment "
            />
          </div>
        </div>
        <label htmlFor="name"></label>
        <input
          onChange={(e) => setPos(e.target.value)}
          value={Pos}
          name="name"
          id="name"
          placeholder="Your Position "
        />
        <div className="name" style={{ display: "flex" }}>
          <div>
            <input
              type="radio"
              name="Gender"
              id="Rem"
              value="RememberMe"
            ></input>
            <label htmlFor="RememberMe">Male</label>
          </div>
          <div>
            <input
              className="shift"
              type="radio"
              name="Gender"
              id="Rem"
              value="RememberMe"
            ></input>
            <label htmlFor="RememberMe">Female</label>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <input
            type="radio"
            name="RememberMe"
            id="Rem"
            value="RememberMe"
          ></input>
          <div>
            <label htmlFor="RememberMe">
              I agree the terms of services and acknoledge the privacy policy{" "}
            </label>
          </div>
        </div>
        <button className="Reg-btn" type="submit">
          Sign Up
        </button>
      </form>

      <button className="Link-btn" onClick={() => props.onFormSwitch("Login")}>
        Already have an acoount? Login here
      </button>
    </div>
  );
};
