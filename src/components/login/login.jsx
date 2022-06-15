import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Data from "../../database/users.json";
export default function Login() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const data = Data;
  const navigate = useNavigate();
  console.log(data);
  const nameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const passHandler = (e) => {
    setPass(e.currentTarget.value);
  };
  const submitHandler = () => {
    var finduser = data.filter(
      (item) => item.username === name && item.password === pass
    );
    if (finduser.length > 0) {
      sessionStorage.setItem("user", name);
      navigate("/dashboard");
    }
  };
  return (
    <div className="log-compo">
      <div className="login">
        <h1>Dish Poll</h1>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => nameHandler(e)}
        />
        <input
          type="text"
          placeholder="Enter Password"
          value={pass}
          onChange={(e) => passHandler(e)}
        />
        <button onClick={submitHandler}>Login</button>
      </div>
    </div>
  );
}
