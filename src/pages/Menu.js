import {MenuList } from "../Helpers/MenuList"
import MenuItem from "../Helpers/MenuItem";
import "../styles/Menu.css"

export const Menu =()=>
{
    return (
        <>
        <div className="menu">
           <h1 className="menuTitle">OUR MENU </h1>
           <div className="menuList">
           {MenuList.map((menuItem, key) => {
          return <MenuItem key={key} img={menuItem.img} name={menuItem.name} price={menuItem.price}/>
        })}
           </div>
        </div>
        </>
    );
}