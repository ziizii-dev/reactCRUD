import React from "react";

// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const  Sidebar = [
  {
    
  },
  {
    'title':'Dashboard',
    'path':'/dashboard',
    'icon':<AiIcons.AiFillDashboard/>,
    'cName':'nav-text'
  },
  {
    'title':'Home',
    'path':'/',
    'icon':<AiIcons.AiFillHome/>,
    'cName':'nav-text'
  },
  {
    'title':'About',
    'path':'about',
    'icon':<IoIcons.IoIosPaper/>,
    'cName':'nav-text'
  },
  {
    'title':'Contact',
    'path':'contact',
    'icon':<AiIcons.AiFillContacts/>,
    'cName':'nav-text'
  }
];