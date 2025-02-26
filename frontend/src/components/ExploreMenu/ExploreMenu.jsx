import React from "react";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div id="explore-menu" className="explore-menu mt-10 p-5 md:p-2 sm:p-3 flex flex-col gap-4">
      <h1 className="font-bold  text-3xl">Explore Menu</h1>
      <p className="text-md">
        Discover a world of flavors with our intuitive menu, designed to make
        your food exploration effortless. Browse through diverse cuisines, from
        local favorites to international delights, all beautifully categorized
        and easy to navigate
      </p>
      <div className="flex my-10 gap-20 overflow-x-scroll scroll-smooth snap-x snap-mandatory px-4">
        {menu_list.map((item, index) => {
          return (
            <div key={index} onClick={()=>setCategory((prev)=>prev===item.menu_name?"All":item.menu_name)} className="flex-shrink-0 cursor-pointer">
              <img className={category===item.menu_name?"menu-active":""} src={item.menu_image} alt="img" />
              <h4 className="text-center pt-2 ">{item.menu_name}</h4>
            </div>
          );
        })}
      </div>
      <hr className="text-gray-500"/>
    </div>
  );
};

export default ExploreMenu;
