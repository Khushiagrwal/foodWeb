import {MenuList } from "../Helpers/MenuList"
import MenuItem from "../Helpers/MenuItem";
import "../styles/Menu.css"
import { useState } from "react";

export const Menu =()=>
{
    const [type,setType]=useState(null);
    console.log(type)
    const menu=MenuList.filter(item=> type===null || item.type===type)

    return (
        <>
        <div className="menu">
           <h1 className="menuTitle">OUR MENU </h1>
           <h1>
                <label for="cars">Choose which type you want </label>
                <select name="cars" id="cars"  onChange={(e)=>{setType(e.target.value)}}>
                    <option value="non_veg" >Non Veg</option>
                    <option value="veg">Veg</option>
                </select>
            </h1>
           <div className="menuList">
           {menu.map((menuItem) => {
          return <>
            <MenuItem  img={menuItem.img} name={menuItem.name} price={menuItem.price}/>
          </>
        })}
           </div>
        </div>
        </>
    );
}