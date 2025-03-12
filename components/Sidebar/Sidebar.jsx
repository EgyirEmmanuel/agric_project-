"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import edenway from "./../../public/edenway.png";


import { IoMdHome } from "react-icons/io";
import { MdBarChart, MdWarning } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { RiPlantFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineControl } from "react-icons/ai";

import Overview from "./../Overview/Overview.jsx";
import Alert from "./../Alert/Alert.jsx";
import Controls from "./../Control/Control.jsx";




const Sidebar = () => {

    const [home, setHome] = useState(false);
    const [overview, setOverview] = useState(true);
    const [statistcis, setStatistcis] = useState(false);
    const [alert, setAlert] = useState(false);
    const [controls, setControls] = useState(false);
    const [setting, setSetting] = useState(false);
    const [contact, setContact] = useState(false);


    const handleClickHome = () => {
        setHome(true)
        setOverview(false);
        setStatistcis(false);
        setAlert(false);
        setControls(false);
      };
    
      const handleClickOverview = () => {
        setOverview(true);
        setHome(false)
        setStatistcis(false);
        setAlert(false);
        setControls(false);
      };
    
      const handleClickStatistcis = () => {
        setStatistcis(true);
        setOverview(false);
        setHome(false)
        setAlert(false);
        setControls(false);
      };
    
      const handleClickAlert = () => {
        setAlert(true);
        setOverview(false);
        setHome(false);
        setStatistcis(false);
        setControls(false);
     
      };
    
      const handleClickControls = () => {
        setControls(true);
        setOverview(false);
        setHome(false);
        setAlert(false);
        setStatistcis(false);
      };

      const handleClickSetting = () => {
        setSetting(true);
        setContact(false);
        setControls(false);
        setOverview(false);
        setHome(false);
        setAlert(false);
        setStatistcis(false);
      };

      const handleClickContact = () => {
        setSetting(false);
        setContact(true);
        setControls(false);
        setOverview(false);
        setHome(false);
        setAlert(false);
        setStatistcis(false);
      };





  return (
    <div className="w-full flex">
      {/* side-bar */}
      <div className="w-[17%] py-3 px-5 flex flex-col justify-between gap-20">
        {/* Home, OverView, Statistics, Alerts and Controls */}
        <div className="flex flex-col gap-6">
          <h5 className="text-menuColor text-base select-none font-roboto">Main</h5>
          <div className="flex flex-col gap-6">


         
           {/* home */}
<Link 
  href="/"
  className={`flex gap-2 text-lg items-center cursor-pointer select-none group`}
>
  {home && (
    <span className="inline-flex w-1 h-full bg-green-500"></span>
  )}
  <span className="text-2xl transition-colors duration-300">
    <IoMdHome
      className={`${home ? "text-green-500" : "text-gray-400"} group-hover:text-green-500 transition-colors duration-100`}
    />
  </span>
  <span className="hidden lg:inline font-poppins font-medium text-lg group-hover:text-green-500 transition-colors duration-100">Home</span>
</Link>


            {/* Overview */}
            <p  onClick={handleClickOverview} className="flex gap-2 text-lg items-center cursor-pointer select-none">
            {overview && (
                <span className="inline-flex w-1 h-full bg-green-500"></span>
              )}
               <span className="text-2xl transition-colors duration-300">
                <RiPlantFill
                  className={`${overview ? "text-green-500" : "text-gray-400"}`}
                />
              </span>
              <span className="hidden lg:inline font-poppins font-medium text-lg">Overview</span>
            </p>


            {/* Statistics */}
            <p   onClick={handleClickStatistcis} className="flex gap-2 text-lg items-center cursor-pointer select-none">
            {statistcis && (
                <span className="inline-flex w-1 h-full bg-green-500"></span>
              )}
              <span className="text-2xl transition-colors duration-300">
                <MdBarChart
                  className={`${statistcis ? "text-green-500" : "text-gray-400"}`}
                />
              </span>
              <span className="hidden lg:inline font-poppins font-medium text-lg">Statistics</span>
            </p> 


            {/* Alerts */}
            <p
              onClick={handleClickAlert}
              className="flex gap-2 text-lg items-center cursor-pointer select-none"
            >
              {alert && (
                <span className="inline-flex w-1 h-full bg-green-500"></span>
              )}
              <span className="text-2xl transition-colors duration-300">
                <MdWarning
                  className={`${alert ? "text-green-500" : "text-gray-400"}`}
                />
              </span>
              <span className="hidden lg:inline font-poppins font-medium text-lg">Alerts</span>
            </p>


              {/* Control */}
            <p
              onClick={handleClickControls}
              className="flex gap-2 text-lg items-center cursor-pointer select-none"
            >
              {controls && (
                <span className="inline-flex w-1 h-full bg-green-500"></span>
              )}
              <span className="text-2xl transition-colors duration-300">
                <AiOutlineControl
                  className={`${controls ? "text-green-500" : "text-gray-400"}`}
                />
              </span>
              <span className="hidden lg:inline font-poppins font-medium text-lg">Controls</span>
            </p>
          </div>
        </div>

{/* Settings and Contact */}
        <div className="flex flex-col gap-6">
          <h5 className=" text-base select-none font-roboto text-menuColor">Help</h5>
          <div className="flex flex-col gap-6">
            
            {/* Setting */}
            <p   onClick={handleClickSetting} className="flex gap-2 text-lg items-center cursor-pointer select-none">
            {setting && (
                <span className="inline-flex w-1 h-full bg-green-500"></span>
              )}
              <span className="text-2xl transition-colors duration-300">
                <IoSettingsSharp
                  className={`${setting ? "text-green-500" : "text-gray-400"}`}
                />
              </span>
              <span className="hidden lg:inline font-poppins font-medium text-lg">Setting</span>
            </p>

              {/* Phone */}
              <p   onClick={handleClickContact} className="flex gap-2 text-lg items-center cursor-pointer select-none">
            {contact && (
                <span className="inline-flex w-1 h-full bg-green-500"></span>
              )}
              <span className="text-2xl transition-colors duration-300">
                <BiSolidPhoneCall
                  className={`${contact ? "text-green-500" : "text-gray-400"}`}
                />
              </span>
              <span className="hidden lg:inline font-poppins font-medium text-lg">Contact</span>
            </p>
          </div>
        </div>

        {/* Edenway Logo */}

        <div className="flex flex-col gap-3">
          <h5 className="font-semibold text-black text-lg  md:text-lg select-none">A Product of </h5>
         <Image src={edenway} width={186} height={82} alt="Edenway Logo" />
         <p className="text-menuColor text-xs font-roboto  md:text-lg">version 1.0.0</p>
        </div>
      </div>


        {/* rendered component */}
        <div className="w-[83%] pl-6">
        {/* <Overview /> */}
        {overview && <Overview />}
        {alert && <Alert />}
        {controls && <Controls />}
      </div>
    </div>
  )
}

export default Sidebar
