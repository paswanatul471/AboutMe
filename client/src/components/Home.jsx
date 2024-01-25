import React from "react";
import home from "../images/home.jpg";
const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen relative">
        <img
          src={home}
          alt="Home"
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute text-center text-white">
          <p className="text-xl">Welcome</p>
          <h1 className="text-4xl">We are Software Engineers</h1>
        </div>
      </div>
    </>
  );
};

export default Home;
