import React, { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white">Your Logo</div>
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleNavbar}
          >
            <AiOutlineAlignRight />
          </button>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto`}
          >
            <div className="text-white lg:flex-grow">
              {/* Your navigation links go here */}
              <Link to="/" className="block lg:inline-block text-white mr-4">
                Home
              </Link>
              <Link
                to="/about"
                className="block lg:inline-block text-white mr-4"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block lg:inline-block text-white mr-4"
              >
                Contact
              </Link>
              <Link
                to="/signup"
                className="block lg:inline-block text-white mr-4"
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="block lg:inline-block text-white mr-4"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
