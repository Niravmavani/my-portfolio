import React, { useState } from "react";
import "../styles.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openModel = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="px-4 md:px-9 z-20 lg:px-8 bg-white top-0 w-full navbar fixed shadow-lg">
        <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-black text-2xl font-semibold whitespace-nowrap ">
                Nirav
              </span>
            </div>
            <button
              type="button"
              className="svg_button inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 md:hidden"
              onClick={openModel}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5 text-black"
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
              className={`w-full md:block md:w-auto ${open ? "" : "hidden"}`}
            >
              <ul className="target:text-blue-500 flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700">
                <li>
                  <a
                    href="#self"
                    className=" block py-2 px-3 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 "
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="target:text-blue-600 block py-2 px-3 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#languages"
                    className="block py-2 px-3 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    LANGUAGES
                  </a>
                </li>
                <li>
                  <a
                    href="#experience"
                    className="block py-2 px-3 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    EXPERIENCE
                  </a>
                </li>
                <li>
                  <a
                    href="#achievements"
                    className="block py-2 px-3 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    ACHIEVEMENTS
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block py-2 px-3 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    PROJECTS
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 px-3 text-gray-900 text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
