import React from "react";
import { Link } from "react-router-dom";
import loginImage from "../images/study.jpg";

const Login = () => {
  return (
    <>
      <div className="w-[60%] m-auto bg-slate-300 py-4">
        <div className="flex my-[10vh] mx-auto px-10">
          <div className="w-1/2">
            <h1 className="text-2xl font-bold">Login</h1>
            <div>
              <form id="login-form">
                <div className="form-group">
                  <label htmlFor="email" className="flex items-center pr-4">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="user-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="flex items-center">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                    className="user-input"
                  />
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="w-[90%] bg-slate-500 text-white py-2 px-4"
                  >
                    Sign in
                  </button>
                </div>
              </form>
              <div className="flex justify-between">
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-blue-500">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="">
              <img src={loginImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
