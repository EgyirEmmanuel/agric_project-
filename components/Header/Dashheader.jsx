"use client"

import { useState, useEffect } from "react";

import { FaTractor, FaRegBell } from "react-icons/fa";

import { SignedIn, UserButton, useUser } from "@clerk/nextjs";

const Dashheader = () => {

    const { user } = useUser();

      // ADDED: Client-side rendering state
    const [isClient, setIsClient] = useState(false);

     // ADDED: Effect to enable client-side rendering after hydration
     useEffect(() => {
      setIsClient(true);
    }, []);

  return (
    <div className="flex justify-between items-center py-4 px-6 bg-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-3xl p-2 rounded-2xl text-white  bg-green-500">
          <FaTractor />
        </span>
      </div>

      {/* AutheticatED User Profile*/}
      <div className="flex items-center gap-6 pr-2">
        {/* bell icon */}
        <div>
          <span className="text-[25px] relative cursor-pointer">
            <FaRegBell />
            <span className="w-2 h-2 inline-flex absolute bg-blue-400 -top-2 -right-1 rounded-full"></span>
          </span>
        </div>

           {/* profile image */}
           <div className="">
          {/* CHANGED: Conditionally render Clerk components only on the client */}
          {isClient && (
            <SignedIn>
              <UserButton />
            </SignedIn>
          )}
        </div>

         {/* user name */}
         {isClient && user && (
          <div className="font-medium text-xl font-poppins">
            {user.fullName}
          </div>
        )}

      </div>
    </div>
  );
};

export default Dashheader;
