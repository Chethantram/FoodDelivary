import React from "react";
import { assets } from "../../assets/frontend_assets/assets";

const AppDownload = () => {
  return (
    <div id="mobile-app" className="mt-20">
      <h2 className="text-3xl text-center mb-4">
        For Better Experience Download <br />
        Our App
      </h2>
      <div className="app-download flex gap-2 md:gap-5  cursor-pointer justify-center items-center">
        <img className="scale-70 md:scale-100 transform md:hover:scale-105" src={assets.play_store} alt="" />
        <img className="scale-75 md:scale-100 transform md:hover:scale-105" src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
