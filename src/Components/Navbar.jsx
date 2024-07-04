import React from 'react';
import logo from '../assets/logo dark.png';
import { GoArrowUpRight } from 'react-icons/go';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#e5f6ffbe] from-30% via-[#02004307] via-40%  to-[#e5f6ffbe]">
      <div className="max-w-[1160px] mx-auto ">
        <header className="p-4 dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex justify-between h-16 mx-auto">
            <a
              rel="noopener noreferrer"
              href="#"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img className="h-8" src={logo} alt="" />
            </a>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1  dark:border- dark:text-violet-600 dark:border-violet-600"
                >
                  Home
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1  dark:border-"
                >
                  Service
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1  dark:border-"
                >
                  Blog
                </a>
              </li>
              <li className="flex">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center px-4 -mb-1  dark:border-"
                >
                  About Us
                </a>
              </li>
            </ul>
            <div className="items-center flex-shrink-0 hidden lg:flex">
              <button className="self-center  py-2 border-slate-500  flex justify-center items-center gap-1 border-2 rounded-xl px-3 ">
                Appointment <GoArrowUpRight />
              </button>
            </div>
            <button className="p-4 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 dark:text-gray-800"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
