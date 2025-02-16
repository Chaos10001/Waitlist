import React, { useState } from "react";
import logo from "../assets/img.png";
import MainPng from "../assets/MainPng.png";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import { toast } from "react-toastify";

const Main = () => {
  
  return (
    <div>
      {/* desktop */}
      <div className="text-center justify-center items-center hidden md:block bg-image px-2 relative">
        <img className="mx-auto pt-[7%] mb-[3%]" src={logo} alt="" />
        <div className="font-Sora space-y-5">
          <h1 className="text-white text-[40px]  font-bold md:mx-[22rem] hidden md:block">
            Notes from <span className="text-primary">MainFounder</span>
          </h1>
          <p className="md:text-lg text-md text-gray-300 mx-[28%]">
            Join founders getting tactical tips and insights on building,
            growing, and scaling their startup and online venture.
          </p>
          <p className="text-white md:text-sm text-sm">
            Join a community of founders, startups and online business owners
            like you
          </p>
          <Form />
        </div>
        <div className="mainpng ">
          <img src={MainPng} alt="" />
        </div>
        <Footer />
      </div>

      {/* Mobile Screen */}
      <div className="text-center justify-center md:hidden items-center px-2 bg-black">
        <img className="mx-auto pt-[15%] mb-[11%]" src={logo} alt="" />
        <div className="font-Sora space-y-5">
          <div className="space-y-2">
            <h1 className="text-white text-[32px] font-bold md:mx-[22rem]">
              Notes from <span className="text-primary">MainFounder</span>
            </h1>
          </div>

          <p className="text-gray-300 text-md px-2">
            Join founders getting tactical tips and insights on building,
            growing, and scaling their startup and online venture.
          </p>
          <p className="text-white text-sm">
            Join a community of founders, startups and online business owners
            like you
          </p>
          <Form />
        </div>
        <div className="pointer-events-none ">
          <img src={MainPng} alt="" />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
