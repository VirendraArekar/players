import React from 'react';
import ReactLogo from '../logo.svg';
import {FiPhoneCall} from 'react-icons/fi';
import {HiOutlineBars3} from 'react-icons/hi2';
import {RxCross1} from 'react-icons/rx';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="sticky top-0 z-30 flex flex-wrap items-center justify-between px-2 py-6 bg-[#131740] ">
    <div className="container px-2 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        
        <Link
          className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          to="/"
        >
          <img src={ReactLogo} alt="React Logo"  className='inline-block w-16' />
          GAME DASHBOARD
        </Link>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {
            navbarOpen ?
            <RxCross1  size={30}/>
            :
            <HiOutlineBars3  size={30}/>
          }
          
          {/* <i className="fas fa-bars"></i> */}
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="nav-item">
            <Link
              className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              to="/contact-us"
            >
              <FiPhoneCall size={25}/> &nbsp;Contact Us
            </Link>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
