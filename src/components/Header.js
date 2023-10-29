import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.png';
import Cart from '../assets/images/heart cart icon.png';

export const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-50 items-center">
        <div className="flex flex-wrap justify-between mx-auto max-w-screen-xl ">
          <Link
            to="/"
            className=" flex"
          >
            <img
              src={Logo}
              className="logo"
              alt="Shopaholic-U Logo"
            />
          </Link>
        <div className="flex items-center ">  
<form>
    <div className="flex">
        <label for="search-dropdown"
         className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email
         </label>
        <button id="dropdown-button" dataDropdowntoggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories
         <svg className="w-2.5 h-2.5 ml-2.5" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
  </svg>
  </button>
        <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" ariaLabelledby="dropdown-button">
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
            </li>
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
            </li>
            </ul>
        </div>
        <div className="relative w-full">
            <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeHolder="Search Mockups, Logos, Design Templates..." required/>
            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" ariaHidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </div>
    </div>
</form>
</div>
          <div className="flex items-center mr-7">
            <div  className="flex ml-8">
            <Link><img
              src={Cart}
              className="h-20 w-25 mr-5"
              alt="Shopaholic-U Cart"
            />
            </Link>
            </div>
            <button type="button" className="text-black-600 hover:text-pink-500 border border-blue-900 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"><a href="#">Login</a></button>
          </div>
        </div>
      </nav>
      <nav className="flex items-center bg-blue-900">
        <div className="max-w-screen-xl px-4 py-3 mx-auto ">
          <div className="flex items-center ">
            <ul className=" Nav flex flex-row font-medium mt-0 mr-6 space-x-8 text-md">
              <li>
                <Link
                  to="Home.js"
                  className="text-gray-900 dark:text-pink-300 hover: hover:text-pink-600 mr-5"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gra mr-5 y-900 dark:text-white hover: hover:text-pink-600"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover: hover:text-pink-600 mr-5 "
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-900 dark:text-white hover: hover:text-pink-600 mr-5 "
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};