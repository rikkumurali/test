
import React, {useState} from "react";

import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import Popup from "./Popup";
import "../styles/Menu.css";


const [currentDish, setCurrentDish] = useState('');
const [showPopUp, setShowPopup] = useState(false);

function Menu() {
  showPopUp(true)
  setCurrentDish(MenuItem)
  
  return (
    {showPopUp && <Popup
    closePopup={closePopupHandler}
      currentDish = {currentDish}
      ></Popup>
  }
   

    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;