import React ,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import logo from './enfuse-logo.png';
import {FaTh, FaAdn,FaHome,FaBars} from "react-icons/fa";
import {MdDns,MdLogout,MdPreview} from 'react-icons/md';
const Sidebar = ({children}) => {
  const[isOpen , setIsOpen] = useState(true);
  const toggle =() => setIsOpen (!isOpen);
 
    const menuItem=[
   
    {
      path:"/",
      name:"Home",
      icon:<FaHome/>
    },
    {
      path:"/admin",
      name:"Admin",
      icon:<FaAdn/>
    },
    {
      path:"/tagger",
      name:"Tagger",
      icon:<MdDns/>
      
    },
    {
      path:"/reviewer",
      name:"Reviewer",
      icon:<MdPreview/> 
    },
    {
      path:"/reports",
      name:"Reports",
      icon:<FaTh/>
    },
    {
      path:"/logout",
      name:"Logout",
      icon:<MdLogout/>
    }
  ]
    return (
      <div className='container'>
        <div style={{width: isOpen ? "300px" : "50px"}} className='sidebar'>
          <div className='top-section'>
            <img style={{display:isOpen ? "block" : "none"}} src={logo} alt='logo' />
            <div style={{width: isOpen ? "300px" : "50px"}} className='bars'><FaBars onClick={toggle}/></div>
          </div>
      {
        menuItem.map((item,index)=>(
          <NavLink to={item.path} key={index} className="link" activeclassName="active">
            <div className='icon'>{item.icon}</div>
            <div className='link-text'>{item.name}</div>
          </NavLink>
        ))
      }
        </div>
      <main>{children}</main>
      </div>
    );
};

export default Sidebar;