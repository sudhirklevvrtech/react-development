import React, { useState, useContext } from "react";
import userContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        name=""
        id=""
        className="py-2 px-2 mx-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        type="password"
        name=""
        className="py-2 px-2 mx-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id=""
        placeholder="Password"
      />
      <button
        className="bg-blue-600 outline-none px-3 py-3 text-white drop-shadow-lg rounded-lg"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
