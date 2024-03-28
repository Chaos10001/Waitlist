import React from "react";
import { useState } from "react";
import logo from "../assets/img.png";
import MainPng from "../assets/MainPng.png";
import Footer from "./Footer";
import Modals from "./Modal";

const Main = () => {
  // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  // const apiUrl = "https://iavsa-cmpzourl.maillist-manage.com/weboptin.zc";
  const [email, setEmail] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email,
        }),
      });
      if (response.ok) {
        console.log("Submited");
        setEmail("");
      } else {
        console.error("Failed");
      }
    } catch (error) {
      console.error("Error Submitting", error);
    }
  };
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
          <form
            method="POST"
            className="flex justify-center items-center"
            id="zcampaignOptinForm"
            onSubmit={onSubmit}
          >
            <input
              type="text"
              className=" md:w-[26rem] w-[12rem] md:h-[3.6rem] h-[3rem] px-3 bg-transparent text-white border border-white rounded-lg mx-2"
              placeholder="Enter your email"
              changeitem="SIGNUP_FORM_FIELD"
              name="CONTACT_EMAIL"
              id="EMBED_FORM_EMAIL_LABEL"
              onChange={(e) => setEmail(e.target.value)}
            />

            <Modals />
          </form>

          {/* <form
            onSubmit={onSubmit}
            className="flex justify-center items-center"
          >
            <input
              className=" md:w-[26rem] w-[12rem] md:h-[3.6rem] h-[3rem] px-3 bg-transparent text-white border border-white rounded-lg mx-2"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Modals />
          </form> */}
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
          <form
            onSubmit={onSubmit}
            // className="flex justify-center items-center"
          >
            {/* <input
              className=" md:w-[26rem] w-[12rem] md:h-[3.6rem] h-[3rem] px-3 bg-transparent text-white border border-white rounded-lg mx-2"
              type="email"
              placeholder="Enter your email"
            /> */}
            <Modals />
          </form>
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
