'use client';
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import profileDefault from '@/assets/images/profile.png' 
import { FaGoogle } from 'react-icons/fa'

const NavBar = () => {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const [ isProfileMenuOpen, setIsProfileMenuOpen ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-white via-gray-50 to-white border-b border-gray-200 shadow-2xl sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={()=> setIsMobileMenuOpen((prev)=> !prev)}
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 border border-gray-300 hover:border-blue-400"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <div
            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
          >
            {/* Logo */}
            <Link className="flex flex-shrink-0 items-center group" href="/">
              <div className="relative p-2 rounded-xl bg-blue-600 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Image
                  className="h-8 w-auto transition-transform duration-300 group-hover:scale-110 filter brightness-0 invert"
                  src={logo}
                  alt="BHome"
                  width={32}
                  height={32}
                />
              </div>

              <span className="hidden md:block text-gray-900 text-2xl font-bold ml-3 tracking-wide group-hover:text-blue-600 transition-colors duration-300">
                BHome
              </span>
            </Link>
            {/* Desktop Menu Hidden below md screens */}
            <div className="hidden md:ml-8 md:block">
              <div className="flex space-x-1">
                <Link
                  href="/"
                  className={`${pathname === '/' ? "bg-blue-600 text-white shadow-lg border-b-2 border-blue-400" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"} rounded-lg px-4 py-2 transition-all duration-300 font-medium border border-transparent hover:border-gray-300`}
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className={`${pathname === '/properties' ? "bg-blue-600 text-white shadow-lg border-b-2 border-blue-400" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"} rounded-lg px-4 py-2 transition-all duration-300 font-medium border border-transparent hover:border-gray-300`}
                >
                  Properties
                </Link>
                {isLoggedIn && (
                    <Link
                  href="/properties/add"
                  className={`${pathname === '/properties/add' ? "bg-blue-600 text-white shadow-lg border-b-2 border-blue-400" : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"} rounded-lg px-4 py-2 transition-all duration-300 font-medium border border-transparent hover:border-gray-300`}
                >
                  Add Property
                </Link>
                )}
                
              </div>
            </div>
          </div>

          {/* Right Side Menu (Logged Out) */}
          <div className="hidden md:block md:ml-6">
            <div className="flex items-center">
                {!isLoggedIn && (
                    <button
                className="flex items-center text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg px-4 py-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 border border-blue-500 hover:border-blue-400 font-medium"
              >
                <FaGoogle className='text-white mr-2'/>
                <span>Login or Register</span>
              </button>
                )}
            </div>
          </div>

          {/* Right Side Menu (Logged In) */}
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0"
          >
            <Link href="/messages" className="relative group">
              <button
                type="button"
                className="relative rounded-full bg-gray-100 p-2 text-gray-600 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 border border-gray-300 hover:border-blue-400"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
              <span
                className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full shadow-lg"
              >
                2
                {/* Replace with the actual number of notifications */}
              </span>
            </Link>
            {/* Profile dropdown button */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="relative flex rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white hover:bg-blue-600 transition-all duration-300 p-1 border border-gray-300 hover:border-blue-400"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={()=> setIsProfileMenuOpen((prev)=> !prev)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full border-2 border-blue-400 hover:border-blue-300 transition-colors duration-300"
                    src={profileDefault}
                    alt="Profile"
                    width={32}
                    height={32}
                  />
                </button>
              </div>

              {/* Profile dropdown */}
              { isProfileMenuOpen && ( <div
                id="user-menu"
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-xl bg-white backdrop-blur-md py-1 shadow-2xl ring-1 ring-gray-200 focus:outline-none border border-gray-200"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 rounded-lg mx-1"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </Link>
                <Link
                  href="/properties/saved"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 rounded-lg mx-1"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Saved Properties
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-300 rounded-lg mx-1"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign Out
                </button>
              </div> 
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      { isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white backdrop-blur-md border-t border-gray-200">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className= {`${pathname==='/' ? 'bg-blue-600 text-white border-l-4 border-blue-400' : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'} block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300 border border-transparent hover:border-gray-300`}
          >
            Home
          </Link>
          <Link
            href="/properties"
            className={`${pathname==='/properties' ? 'bg-blue-600 text-white border-l-4 border-blue-400' : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'} block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300 border border-transparent hover:border-gray-300`}
          >
            Properties
          </Link>
          { isLoggedIn && (
            <Link
            href="/properties/add"
            className={`${pathname==='/properties/add' ? 'bg-blue-600 text-white border-l-4 border-blue-400' : 'hover:bg-gray-100 text-gray-700 hover:text-gray-900'} block rounded-lg px-3 py-2 text-base font-medium transition-all duration-300 border border-transparent hover:border-gray-300`}
          >
            Add Property
          </Link>
          )}
          {!isLoggedIn && (
            <button
            className="flex items-center text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg px-3 py-2 my-3 w-full transition-all duration-300 shadow-lg border border-blue-500 hover:border-blue-400"
          >
            <FaGoogle className='text-white mr-2'/>
            <span>Login or Register</span>
          </button>
          )}
        </div>
      </div>
      )}
      
    </nav>
  )
}

export default NavBar
