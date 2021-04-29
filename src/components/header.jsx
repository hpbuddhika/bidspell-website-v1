import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Hamburger from '../components/hamburger'

const Header = ({ siteTitle }) => (
  <header className="block w-full px-5 bg-gray-400 fixed top-0  z-50  bg-white  h-20 font-sans font-normal  text-sm  lg:text-lg tracking-wide antialiased text-gray-600">
    
    <div className="text-center h-20 lg:hidden flex items-center	 ">
      <Hamburger></Hamburger>
    </div>
    
    <div className="max-w-screen-xl	h-20 px-5 m-auto hidden lg:block">
      <div className="flex h-full py-6 ">
        <div className="mr-1 w-20 h-full bg-red-400 rounded-full text-center ">
          Logo
          <hamburger className="bg-blue-400"></hamburger>

        </div>
        <div className="flex-shrink">Bidspell</div>
        <div className="flex m-auto">
          <div className="flex-initial h-16 group relative mx-4 cursor-pointer	">
            Solutions
            <div className="absolute z-10 top-10 mt-4 text-sm invisible opacity-0  shadow-md border-8 border-gray-50 rounded-lg	 transition delay-100 duration-300 ease-in-out	 text-gray-700 group-hover:visible  group-hover:opacity-100	">
              <ul className="-m-0.5 w-60 bg-gray-50">
                <li className="mb-0">
                  <a
                    className=" bg-gray-50 rounded-t-md	 hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <div className="inline-block relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-3 animate-ping"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute mr-3 top-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    CDN Package
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="bg-gray-50 hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                    Progressive Web App
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className=" bg-gray-50 hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-3 animate-pulse "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    Bidspell AMP
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="bg-gray-50 hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-3 animate-spin-slow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Bidspell SEO
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="bg-gray-50 rounded-b-md hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-3 animate-bounce "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    Push Notifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-initial h-16	 group  relative mx-4 cursor-pointer	">
            Publishers
            <div className="absolute z-10  top-10 mt-3 m-0 text-sm invisible opacity-0  shadow-md border-8 border-gray-50		 rounded-lg	 transition delay-100 duration-300 ease-in-out	 text-gray-700 group-hover:visible  group-hover:opacity-100	">
              <ul className="-m-0.5 w-60 bg-gray-50">
                <li className="mb-0">
                  <a
                    className=" bg-gray-50 rounded-t-md	 hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <div className="inline-block relative">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block mr-3 animate-ping"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 absolute mr-3 top-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    CDN Package
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="bg-gray-50 hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                      />
                    </svg>
                    Progressive Web App
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className=" bg-gray-50 hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-3 animate-pulse "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    Bidspell AMP
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="bg-gray-50 hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-3 animate-spin-slow"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Bidspell SEO
                  </a>
                </li>
                <li className="m-0">
                  <a
                    className="bg-gray-50 rounded-b-md hover:bg-red-200	 py-2 px-4 block whitespace-no-wrap"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block mr-3 animate-bounce "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                    Push Notifications
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-initia mx-4 cursor-pointer	">Resources</div>
          <div className="flex-initia mx-4 cursor-pointer	">Company</div>
          {/* <div className="flex-initia mx-4 cursor-pointer	">Resources</div> */}
        </div>
        <div className="flex-shrink self-center text-right lg:mr-10">
          <button className="bg-red-400	 py-2 px-4  mb-0 text-white	 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105  hover:bg-red-500	 rounded inline-flex items-center  cursor-pointer">
            <span className="mr-1">Sign In</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-2 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <div className="flex-shrink self-center text-left">
          <button className="bg-red-400	 py-2 px-4  mb-0 text-white	 transition duration-500 ease-in-out  transform hover:-translate-y-1 hover:scale-105  hover:bg-red-500	 rounded inline-flex items-center  cursor-pointer">
            <span className="mr-1">Get Started</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-2 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
