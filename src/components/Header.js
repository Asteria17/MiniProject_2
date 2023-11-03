import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/logo.jpg';
import Cart from '../assets/images/heart cart icon.png';

export const Header = () => {
  const activeClass =
    'text-gray-900 dark:text-pink-300 hover:text-white mr-5 border-blue-900 hover:bg-pink-600 activ';

  const inActiveClass =
    'text-gray-900 dark:text-pink-300 hover:text-white mr-5 border-blue-900 hover:bg-pink-600';
  const { hidden, setHidden } = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    searchProducts();
  }, [searchTerm]);

  const searchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?title=${searchTerm}`);
      if (response.ok) {
        const products = await response.json();
        setData(products);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchProducts();
  };

  return (
    <header>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <NavLink
            to="/Home.js"
            className="flex ml-10 "
          >
            <img
              src={Logo}
              className="h-8 "
              alt="Shopaholic-U Logo"
            />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
              Shopaholic-U
            </span>
          </NavLink>
          <div className="flex items-center ">
          <form onSubmit={handleSearch}>
        <label htmlFor="default-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Products, Category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>

            <div className="flex items-center">
              <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                    end
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive ? activeClass : inActiveClass
                    }
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>

            <NavLink
              to="#"
              className="ml-20 text-m  text-blue-600 dark:text-blue-500 hover:underline "
            >
              Login
            </NavLink>
            <img
              src={Cart}
              className=" w-14 mr-5"
              alt="Shopaholic-U Cart"
            />
          </div>
        </div>
      </nav>
      <nav className="flex items-center bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto"></div>
      </nav>
    </header>
  );
};
