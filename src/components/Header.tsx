'use client' // nécessaire si tu utilises app router

import React, { useState } from 'react';
import logo2 from '../../public/img/logo2.png';
import Image from 'next/image';
import Link from 'next/link';
import DrawerComonent from './Drawer';


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-[#111111] border-gray-200 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between  mx-0 sm:mx-8 p-4 ">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse" >
          <Image className='w-[110px] h-[40px]   sm:w-[280px] sm:h-[80px]'
            src={logo2}
          
            alt="Logo"
          />
        </Link>
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`}
          id="navbar-default"
        >
        <>
        <DrawerComonent isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />
        
          <ul className="font-medium hidden sm:flex  p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link href="/" className="block py-2 px-3 text-[#DFD0B8] rounded-sm md:bg-transparent md:text-[#DFD0B8] md:p-0">Home</Link>
            </li>
          
            <li>
              <Link href="services" className="block py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#DFD0B8] md:p-0">Services</Link>
            </li>
           
            <li>
              <Link href="contact" className="block py-2 px-3 text-white hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#DFD0B8] md:p-0">Contact us</Link>
            </li>
          </ul>
           
          </>
        </div>
      </div>
    </nav>
  );
}
