import React from 'react';
import Logo from '../assets/news_logo.png';

const Navbar = () => {
  return (
    <nav className="bg-blue-100">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a className="flex items-center" href="#">
          <img
            className="w-44 h-16 ml-2"
            src={Logo}
            alt="nowfeed-logo"
          />
        </a>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-400"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="hidden w-full lg:flex lg:items-center lg:w-auto">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 text-lg flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:text-gray-900"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="px-3 py-2 text-lg flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:text-gray-900"
                href="#"
              >
                About
              </a>
            </li>
            <li className="relative nav-item dropdown">
              <a
                className="px-3 py-2 text-lg flex items-center text-xs uppercase font-bold leading-snug text-gray-700 hover:text-gray-900"
                href="https://github.com/sauravztx"
                role="button"
              >
                Github
              </a>
            </li>
          
          </ul>
          <form className="flex ml-4">
            <input
              className="form-input px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-600"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
