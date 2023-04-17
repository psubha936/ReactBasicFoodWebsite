
import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";
import MenuCArd from "./MenuCArd";
import Navbar from "./Navbar";

const uniqueList =[... new Set(Menu.map((curElem)=>{
    return curElem.category;
}),
), "All",
];

console.log("Unique List: " + uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu); 
  const [menuList , setMenuList] = useState(uniqueList);
  console.log(menuData);
  const filterItems = (category)=>{
    if(category === "All"){
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem)=>{
        return curElem .category=== category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItems = {filterItems} menuList={menuList} />
      <MenuCArd menuData={menuData} />
    </>
  );
};

export default Resturant;
