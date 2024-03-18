import React from "react";
import logo from "../assets/mainfounder.png";
import MainPng from "../assets/MainPng.png";
import Footer from "./Footer";

const Main = () => {
  return (
    <div>
      {/* desktop */}
      <div className="text-center justify-center items-center hidden md:block bg-image px-2 relative">
        <img className="mx-auto" src={logo} alt="" />
        <div className="font-Sora space-y-5">
          <div className="md:hidden ">
            <p className="text-white text-sm">
              Elevate Your Entrepreneurial Journey - For Free
            </p>
            <h1 className="text-white md:text-4xl text-2xl font-bold md:mx-[22rem]">
              Subscribe to a community of successful founders.
            </h1>
          </div>
          <p className="text-white text-sm hidden md:block">
            Elevate Your Entrepreneurial Journey - For Free
          </p>
          <h1 className="text-white md:text-4xl text-2xl font-bold md:mx-[22rem] hidden md:block">
            Subscribe to a community of <br /> successful founders.
          </h1>
          <p className="text-gray-300 md:text-lg text-md md:mx-[22rem]">
            Subscribe to{" "}
            <span className="text-primary text-lg">MainFounder</span>
            Newsletter and unlock a wealth of knowledge and resources. From
            in-depth guides on scaling your startup to actionable growth tactics
            to starting your online business, we're here to fuel your business
            journey,
            <span className="text-primary"> without the price tag.</span>
            <p className="text-gray-300">
              Every column brings you closer to freedom + millions of dollars.
              <span className="text-white">We meant this!</span>
            </p>
          </p>
          <p className="text-white md:text-sm text-sm">
            Join a community of founders, startups and online business owners
            like you
          </p>
          <div>
            <input
              className=" md:w-[26rem] w-[12rem] md:h-[3.6rem] h-[3rem] px-3 bg-transparent text-white border border-white rounded-lg mx-2"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-primary md:px-5 md:py-4 px-3 py-3 text-white font-bold rounded-lg">
              Subscribe
            </button>
          </div>
        </div>
        <div className="mainpng">
        <img src={MainPng} alt="" />
      </div>
        <Footer />
      </div>

      {/* Mobile Screen */}
      <div className="text-center justify-center md:hidden items-center px-2 bg-black">
        <img className="mx-auto" src={logo} alt="" />
        <div className="font-Sora space-y-5">
          <div>
            <p className="text-white text-sm">
              Elevate Your Entrepreneurial Journey - For Free
            </p>
            <h1 className="text-white md:text-4xl text-2xl font-bold md:mx-[22rem]">
              Subscribe to a community of successful founders.
            </h1>
          </div>

          <p className="text-gray-300 md:text-lg text-md md:mx-[22rem]">
            Subscribe to{" "}
            <span className="text-primary text-lg">MainFounder</span>
            Newsletter and unlock a wealth of knowledge and resources. From
            in-depth guides on scaling your startup to actionable growth tactics
            to starting your online business, we're here to fuel your business
            journey,
            <span className="text-primary"> without the price tag.</span>
            <p className="text-gray-300">
              Every column brings you closer to freedom + millions of dollars.
              <span className="text-white">We meant this!</span>
            </p>
          </p>
          <p className="text-white md:text-sm text-sm">
            Join a community of founders, startups and online business owners
            like you
          </p>
          <div>
            <input
              className=" md:w-[26rem] w-[12rem] md:h-[3.6rem] h-[3rem] px-3 bg-transparent text-white border border-white rounded-lg mx-2"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-primary md:px-5 md:py-4 px-3 py-3 text-white font-bold rounded-lg">
              Subscribe
            </button>
          </div>
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
