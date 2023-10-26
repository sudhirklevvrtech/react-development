import React, { useState } from 'react';
import './App.css';
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai';
import {BiSolidRightArrow, BiSolidDownArrow} from 'react-icons/bi';

const App = () => {
  
  const [openMenu, setOpenMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleMenu =()=>{
    setOpenMenu(!openMenu);
  }

  const dropdownMenu = ()=>{
    setDropdown(!dropdown);
  }

  return (
    <div>
    {/* desktop header */}
      <header className="header">
        <div className="container">
         <nav className="navbar">
         <a href="#" className="brand">Logo</a>
          <ul className="navigation-nav">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink dropDown">
              Services

              <ul className="dropdownMenu">
                <li className='navitem'><a href="#">Web Development</a></li>
                <li className='navitem'><a href="#">App Development</a></li>
                <li className='navitem'><a href="#">Digital Marketing</a></li>
                <li className='navitem'><a href="#">Graphic Designing</a></li>

              </ul>              
              </a>

            </li>
            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>
          </ul>
         </nav>
        </div>
      </header>

      {/* desktop header end */}
      {/* mobile header start */}
      <div className="mobile-menu">
        <div className="container">
          <nav className="mobileNav">
            <a href="#" className="brand">Brand</a>
            <button onClick={toggleMenu} className='toggleMenu'>
             {
              openMenu ? <AiOutlineClose />  : <FaBars />
             }
            </button>
            <div className={`navigation ${openMenu ? 'active' : ''}`}>
              <ul className="navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" onClick={dropdownMenu} className='responsive-dropdown'>
                Service {dropdown ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
                <ul className={`responsive-dropdown-menu ${dropdown ? 'active' : ''}`}>
                  <li><a href="#">Web Development</a></li>
                  <li><a href="#">App Development</a></li>
                  <li><a href="#">Digital Marketing</a></li>
                  <li><a href="#">Graphic Designing</a></li>

                </ul>
                </a>
                </li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>

              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default App