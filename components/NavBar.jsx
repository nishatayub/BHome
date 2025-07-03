'use client';
import { useState } from 'react';
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import logo from '@/assets/images/logo-white.png'
import profileDefault from '@/assets/images/profile.png' 
import { FaGoogle } from 'react-icons/fa'

const NavBar = () => {
    const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);
    const [ isProfileMenuOpen, setIsProfileMenuOpen ] = useState(false);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-[#483C32] via-[#36454F] to-[#483C32] border-b-2 border-[#D2B48C] shadow-lg backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={()=> setIsMobileMenuOpen((prev)=> !prev)}
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[#D2B48C] hover:bg-[#36454F] hover:text-[#FFFDD0] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D2B48C] transition-all duration-200"
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
              <div className="relative">
                <Image
                  className="h-12 w-auto transition-transform duration-200 group-hover:scale-105"
                  src={logo}
                  alt="BHome"
                  width={48}
                  height={48}
                />
                <div className="absolute inset-0 bg-[#D2B48C] opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-200"></div>
              </div>

              <span className="hidden md:block text-[#FFFDD0] text-3xl font-bold ml-3 tracking-wide group-hover:text-[#D2B48C] transition-colors duration-200">
                BHome
              </span>
            </Link>
            {/* Desktop Menu Hidden below md screens */}
            <div className="hidden md:ml-8 md:block">
              <div className="flex space-x-1">
                <Link
                  href="/"
                  className={`${pathname === '/' ? "bg-[#36454F] shadow-lg border-b-2 border-[#D2B48C]" : "hover:bg-[#36454F]"} text-[#FFFDD0] hover:text-[#D2B48C] rounded-lg px-4 py-2 transition-all duration-200 font-medium`}
                >
                  Home
                </Link>
                <Link
                  href="/properties"
                  className={`${pathname === '/properties' ? "bg-[#36454F] shadow-lg border-b-2 border-[#D2B48C]" : "hover:bg-[#36454F]"} text-[#FFFDD0] hover:text-[#D2B48C] rounded-lg px-4 py-2 transition-all duration-200 font-medium`}
                >
                  Properties
                </Link>
                {isLoggedIn && (
                    <Link
                  href="/properties/add"
                  className={`${pathname === '/properties/add' ? "bg-[#36454F] shadow-lg border-b-2 border-[#D2B48C]" : "hover:bg-[#36454F]"} text-[#FFFDD0] hover:text-[#D2B48C] rounded-lg px-4 py-2 transition-all duration-200 font-medium`}
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
                className="flex items-center text-[#FFFDD0] bg-[#36454F] hover:bg-[#2F2F2F] hover:text-[#D2B48C] rounded-lg px-4 py-2 transition-all duration-200 shadow-md border border-[#D2B48C] hover:border-[#F5F5DC]"
              >
                <FaGoogle className='text-[#D2B48C] mr-2'/>
                <span className="font-medium">Login or Register</span>
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
                className="relative rounded-full bg-[#36454F] p-2 text-[#D2B48C] hover:text-[#FFFDD0] hover:bg-[#2F2F2F] focus:outline-none focus:ring-2 focus:ring-[#D2B48C] focus:ring-offset-2 focus:ring-offset-[#483C32] transition-all duration-200"
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
                className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-[#FFFDD0] transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full shadow-lg"
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
                  className="relative flex rounded-full bg-[#36454F] text-sm focus:outline-none focus:ring-2 focus:ring-[#D2B48C] focus:ring-offset-2 focus:ring-offset-[#483C32] hover:bg-[#2F2F2F] transition-all duration-200 p-1"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={()=> setIsProfileMenuOpen((prev)=> !prev)}
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">Open user menu</span>
                  <Image
                    className="h-8 w-8 rounded-full border-2 border-[#D2B48C]"
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
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-[#FFFDD0] py-1 shadow-xl ring-1 ring-[#D2B48C] ring-opacity-50 focus:outline-none border border-[#D2B48C]"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-[#483C32] hover:bg-[#F5F5DC] transition-colors duration-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </Link>
                <Link
                  href="/properties/saved"
                  className="block px-4 py-2 text-sm text-[#483C32] hover:bg-[#F5F5DC] transition-colors duration-200"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Saved Properties
                </Link>
                <button
                  className="block w-full text-left px-4 py-2 text-sm text-[#483C32] hover:bg-[#F5F5DC] transition-colors duration-200"
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
        <div id="mobile-menu" className="md:hidden bg-[#36454F] border-t border-[#D2B48C]">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="/"
            className= {`${pathname==='/' ? 'bg-[#2F2F2F] border-l-4 border-[#D2B48C]' : 'hover:bg-[#2F2F2F]'} text-[#FFFDD0] block rounded-md px-3 py-2 text-base font-medium transition-all duration-200`}
          >
            Home
          </Link>
          <Link
            href="/properties"
            className={`${pathname==='/properties' ? 'bg-[#2F2F2F] border-l-4 border-[#D2B48C]' : 'hover:bg-[#2F2F2F]'} text-[#FFFDD0] block rounded-md px-3 py-2 text-base font-medium transition-all duration-200`}
          >
            Properties
          </Link>
          { isLoggedIn && (
            <Link
            href="/properties/add"
            className={`${pathname==='/properties/add' ? 'bg-[#2F2F2F] border-l-4 border-[#D2B48C]' : 'hover:bg-[#2F2F2F]'} text-[#FFFDD0] block rounded-md px-3 py-2 text-base font-medium transition-all duration-200`}
          >
            Add Property
          </Link>
          )}
          {!isLoggedIn && (
            <button
            className="flex items-center text-[#FFFDD0] bg-[#2F2F2F] hover:bg-[#483C32] rounded-md px-3 py-2 my-3 w-full transition-all duration-200"
          >
            <FaGoogle className='text-[#D2B48C] mr-2'/>
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
