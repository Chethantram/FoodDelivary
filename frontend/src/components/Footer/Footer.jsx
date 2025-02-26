import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => {
  return (
   
      <div id="contact-us" className="footer w-full bg-gray-800 flex flex-col mt-30 gap-5">
        <div className="footer-content grid  grid-cols-1 md:flex md:justify-around p-4 md:p-15 ">
          <div className="footer-left grid grid-cols-1 w-full md:w-1/2 gap-5 md:text-start text-center mx-auto">
            <h3 className="text-orange-600 font-bold text-3xl">CTR</h3>
            <p className="text-white w-full md:w-3/4">
            Explore a world of flavors, all at your fingertips. From local favorites to international delights, we bring the best dishes straight to your door. Your next delicious meal is just a click away!
            </p>
            <div className="footer-left-icon flex md:gap-3 gap-5 md:mx-0 mx-auto items-center">
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
          <div className="footer-side grid grid-cols-2 md:gap-5  md:mt-0 mt-10 text-white">
          <div className="footer-center flex flex-col gap-5">
            <h2 className="text-2xl font-medium">COMPANY</h2>
            <ul className="flex flex-col gap-2">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-right flex flex-col gap-5">
            <h2 className="text-2xl font-medium">GET IN TOUCH</h2>
            <ul className="flex flex-col gap-2">
                <li>+1-458-253-7849</li>
                <li>chethant426@gmail.com</li>
            </ul>
          </div>
          </div>
        </div>
        <hr className="text-gray-300 w-[90%] mx-auto"/>
        <p className="text-center mb-4 text-gray-400">Copyright 2025 &copy;CTR - All Right Reserved</p>
      </div>
  );
};

export default Footer;
