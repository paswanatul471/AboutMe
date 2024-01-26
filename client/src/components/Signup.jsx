import React from "react";
import boy from "../images/study.jpg";
import {
  AiOutlineTeam,
  AiOutlineMail,
  AiFillPhone,
  AiOutlineCompress,
} from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="w-[60%]  m-auto bg-slate-300 py-4">
        <div className="flex my-[10vh] mx-auto px-10">
          <div className="w-1/2">
            <h1 className="text-2xl font-bold">Sign up</h1>
            <div className="">
              <form id="register-form">
                <div className="form-group">
                  <label htmlFor="name" className="flex items-center pr-4">
                    <AiOutlineTeam />
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="user-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="flex items-center">
                    <AiOutlineMail />
                    Your email
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
                  <label htmlFor="phone" className="flex items-center">
                    <AiFillPhone />
                    Phone number
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    required
                    className="user-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="profession" className="flex items-center">
                    <AiOutlineCompress />
                    Your profession
                  </label>
                  <input
                    type="text"
                    name="profession"
                    id="profession"
                    required
                    className="user-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="flex items-center">
                    <RiLockPasswordFill />
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
                  <label
                    htmlFor="confirm-password"
                    className="flex items-center"
                  >
                    <RiLockPasswordFill />
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    required
                    className="user-input"
                  />
                </div>
                <div className="form-button">
                  <button
                    type="submit"
                    className="w-96 bg-slate-500 text-white py-2 px-4"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-1/2">
            <div className="w-[95%] m-auto text-center">
              <img src={boy} alt="" className="w-80" />
              <Link to="/login" className="text-blue-500">
                I am already register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
