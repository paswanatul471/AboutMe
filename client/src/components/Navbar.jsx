import React, { useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";

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
              <a href="/" className="block lg:inline-block text-white mr-4">
                Home
              </a>
              <a
                href="/about"
                className="block lg:inline-block text-white mr-4"
              >
                About
              </a>
              <a
                href="/contact"
                className="block lg:inline-block text-white mr-4"
              >
                Contact
              </a>
              <a
                href="/signup"
                className="block lg:inline-block text-white mr-4"
              >
                Sign Up
              </a>
              <a
                href="/login"
                className="block lg:inline-block text-white mr-4"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
