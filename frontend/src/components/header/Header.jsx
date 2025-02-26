import React from "react";

const Header = () => {
  return (
    <div className="home-header ">
      <div className="header-content absolute text-white flex flex-col items-start sm:top-30   top-6 gap-3 sm:gap-4 p-4 sm:p-20  max-w-[75%] sm:max-w-[62%]">
      <h2 className="font-bold text-lg  sm:text-4xl " >Place an order for your favorite dishes here.</h2>
      <p className="sm:text-md text-sm">
        Discover mouthwatering recipes, explore nearby restaurants, and satisfy
        your cravings effortlessly.
      </p>
      <button className="sm:h-15 h-10 rounded-4xl bg-white text-gray-600 hover:text-black duration-300 w-25 sm:w-35">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
