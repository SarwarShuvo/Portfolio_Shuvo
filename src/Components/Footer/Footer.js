import React from "react";

const Footer = () => {
  return (
    <div className="bg-pink-50">
      <div className="container mx-auto text-center pt-6 pb-6">
        <div className="text-xl font-bold">
        ©{" "}
          <span className=" text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-600"> Sarwar Shuvo</span>
        </div>
        <small>Made with ❤️</small>
      </div>
    </div>
  );
};

export default Footer;
