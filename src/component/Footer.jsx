import React from "react";
import Instagram from "../assets/insta.png";
import Facebook from "../assets/face.png";
import Linkdin from "../assets/Linkdin.png";
import Twitter from "../assets/twiter.png";

const Footer = () => {
  return (
    <div>
      {/* desktop */}
      <div className="items-center justify-center text-center footer hidden md:block">
        <div className="flex ">
          <div className="mx-auto flex space-x-5 cursor-pointer">
            <img src={Twitter} alt="" />
            <img src={Linkdin} alt="" />
            {/* <img src={Facebook} alt="" /> */}
            <img src={Instagram} alt="" />
          </div>
        </div>
        <h1 className="font-Sora text-center text-md  text-white py-5">
          © MainFounder by Vasdesk, LLC. All rights reserved.
        </h1>
        <a
          href="https://docs.google.com/document/d/19UYjmGqJsUt3qPNTbQm36xMgpB1nEukstgXRMxdILqU/edit?usp=sharing"
          target="_blank"
        >
          <h1 className="font-Sora text-center pt-[0.7%] text-sm  text-white py-5">
            Privacy Policy
          </h1>
        </a>
      </div>
      {/* Mobile */}
      <div className="items-center justify-center text-center md:hidden pb-[50%] pt-[8%]">
        <div className="flex ">
          <div className="mx-auto flex space-x-5 cursor-pointer">
            <img src={Twitter} alt="" />
            <img src={Linkdin} alt="" />
            {/* <img src={Facebook} alt="" /> */}
            <img src={Instagram} alt="" />
          </div>
        </div>
        <h1 className="font-Sora text-center text-md md:text-sm text-white py-5">
          © MainFounder by Vasdesk, LLC. All rights reserved.
        </h1>
        <a
          href="https://docs.google.com/document/d/19UYjmGqJsUt3qPNTbQm36xMgpB1nEukstgXRMxdILqU/edit?usp=sharing"
          target="_blank"
        >
          <h1 className="font-Sora text-center pt-[2%] text-sm  text-white py-5">
            Privacy Policy
          </h1>
        </a>
      </div>
    </div>
  );
};

export default Footer;
