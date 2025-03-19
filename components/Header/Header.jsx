"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

import { SignInButton, SignedOut, SignedIn } from "@clerk/nextjs";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full h-20 bg-bgBody border-b-[1px] border-bgButton">
      <div className="w-full bg-bgBody px-10 md:px-20 mx-auto h-full max-w-screen-2xl flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl text-white font-semibold font-poppins cursor-pointer`}
        >
          GAIA Club
        </Link>

        {/* DESKTOP NAVBAR */}
        <div className="hidden md:block ">
          <div className="flex items-center justify-between space-x-10">
            <ul className="flex space-x-10 text-white  font-poppins font-normal text-[15px]">
              <li className="hover:text-hoverColor transition-colors duration-100">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-hoverColor transition-colors duration-100">
                <Link href="#">Technology</Link>
              </li>
              <li className="hover:text-hoverColor transition-colors duration-100">
                <Link href="#">Contact</Link>
              </li>
            </ul>

            {/* Sign in btn */}
            <SignedOut>
              <SignInButton>
                <button className="bg-bgButton border-none p-2 text-bgBody rounded-full font-poppins font-semibold">
                  Sign in
                </button>
              </SignInButton>
            </SignedOut>

            {/* Dashboard btn */}
            <SignedIn>
              <Link
                href="/dashboard"
                className="bg-bgButton p-2 rounded-full hover:bg-opacity-80 transition-opacity duration-100"
              >
                <button className=" border-none p- text-bgBody rounded-full font-poppins font-semibold">
                  Dashboard
                </button>
              </Link>
            </SignedIn>
          </div>
        </div>

        {/* hamburger icon */}
        <span
          onClick={handleClick}
          className="text-white block md:hidden text-2xl cursor-pointer hover:text-bgButton transition-colors duration-100"
        >
          <RxHamburgerMenu />
        </span>

        {/* MOBILE NAVBAR */}
        {isOpen && (
          <div className=" md:hidden w-full fixed inset-0 bg-bgBody z-50 ">
            <div className="w-full h-full flex flex-col items-center justify-center relative">
              <span
                className="text-white text-2xl cursor-pointer absolute top-5 right-5 hover:text-bgButton transition-colors duration-100"
                onClick={handleClick}
              >
                <RxCross2 />
              </span>
              <ul className="flex flex-col space-y-5 text-white font-normal text-center justify-center text-2xl font-poppins">
                <li
                  className="hover:text-hoverColor transition-colors duration-100"
                  onClick={handleMobileMenu}
                >
                  <Link href="/about">About Us</Link>
                </li>
                <li
                  className="hover:text-hoverColor transition-colors duration-100"
                  onClick={handleMobileMenu}
                >
                  <Link href="#">Technology</Link>
                </li>
                <li
                  className="hover:text-hoverColor transition-colors duration-100"
                  onClick={handleMobileMenu}
                >
                  <Link href="#">Contact</Link>
                </li>
                <li>
                  <SignedIn>
                    <Link
                      href="/dashboard"
                      className="bg-bgButton p-2 text-bgBody font-semibold rounded-full  hover:bg-opacity-80 transition-opacity duration-100"
                      onClick={handleMobileMenu}
                    >
                      Dashboard
                    </Link>
                  </SignedIn>
                </li>
                <li>
                  <SignedOut>
                    <SignInButton>
                      <button
                        className="bg-bgButton border-none p-2 text-bgBody rounded-full font-poppins font-semibold"
                        onClick={handleMobileMenu}
                      >
                        Sign in
                      </button>
                    </SignInButton>
                  </SignedOut>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
