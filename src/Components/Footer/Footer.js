import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto text-center pt-6 pb-6">
        <div className="text-xl text-white font-bold">
        ©{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> Sarwar Shuvo</span>
        </div>
        <small className="text-white">Made with ❤️</small>
      </div>
    </div>
  );
};

export default Footer;
