import React from 'react';
import { SiGmail } from "react-icons/si"
import { IoIosCall } from "react-icons/io";
import './NavBar.css';

function NavBar() {
  const navList = ['+92 313103877', 'shahmir.siddiqui.b@gmail.com'];

  return (
    <nav className='NavBarBody'>
      <div className='nav1'>
        <img src='https://ik.imagekit.io/sheryians/light-logo_lNzGXRRlQ.png' alt="logo" />
        <h4 className='head'>Muhammad<br />Shahmir Siddiqui</h4>
      </div>

      {/* <div className='nav2'>
        {navList.map((item, index) => (
          <h4 className='head' key={index}>{item}</h4>
        ))}
      </div> */}

      <div className='nav3'>
        {/* Wrap the call icon in a tel: link */}
        <a href="tel:+92313103877">
          <h4 className='head'><IoIosCall size={22}/></h4>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shahmir.siddiqui.b@gmail.com" target="_blank" rel="noreferrer">
          <h4 className='head'><SiGmail size={18}/></h4>
        </a>



      </div>
    </nav>
  );
}

export default NavBar;
