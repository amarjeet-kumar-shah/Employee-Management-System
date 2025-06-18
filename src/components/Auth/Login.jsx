import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="rounded-xl border-2 border-emerald-600 p-28">
        <h1 className="text-3xl font-medium mb-10">User Login</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none border-2 border-emerald-600 bg-transparent rounded-full text-xl px-4 py-2 placeholder:text-grey-400"
            type="email"
            placeholder="Username"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none border-2 border-emerald-600 bg-transparent rounded-full text-xl px-4 py-2 mt-2 placeholder:text-grey-400"
            type="password"
            placeholder="Password"
          />
          <h3 className="mt-3 text-sm mr-32 cursor-pointer font-medium">Forgot Password?</h3>
          <button className="text-white border-none outline-none border-2 bg-emerald-700 font-semibold bg-transparent rounded-full text-lg px-8 py-2 w-full mt-7 placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
