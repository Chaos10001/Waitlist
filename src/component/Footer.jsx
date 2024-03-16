import React from "react";
import Instagram from "../assets/insta.png";
import Facebook from "../assets/face.png";
import Linkdin from "../assets/Linkdin.png";
import Twitter from "../assets/twiter.png";

const Footer = () => {
  return (
    <div className="items-center justify-center text-center py-12">
      <div className="flex ">
        <div className="mx-auto flex space-x-5 cursor-pointer">
          <img src={Twitter} alt="" />
          <img src={Linkdin} alt="" />
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <h1 className="font-Sora text-center text-md md:text-xl text-white py-5">
        © MainFounder Inc. All rights reserved.
      </h1>
    </div>
  );
};

export default Footer;
