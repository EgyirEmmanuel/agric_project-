import React from "react";
import Link from "next/link";
import Image from "next/image";

import groupPic from "./../../../public/groupPic.jpeg";

const page = () => {
  return (
    <div className="bg-bgBody text-white min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 mt-2">
          <h1 className="text-2xl md:text-[40px]  font-semibold font-sans mb-6">
            About the teams at GAIA Club
          </h1>
          <p className="text-xl  font-poppins font-normal max-w-2xl mx-auto opacity-90">
            We harness the power of IoT and smart sensors to monitor critical
            parameters in real time. Our team specializes in collecting,
            analyzing, and visualizing data through intuitive dashboards,
            turning raw information into actionable insights.
          </p>
        </div>

        {/* Three Steps Container */}
        <div className="w-full flex justify-center mb-8">
          <Image
            src={groupPic}
            width={500}
            height={500}
            alt="group-picture"
          ></Image>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-xl  font-poppins font-normal mb-6">
          <p>
            Monitor, analyze, and visualize data effortlessly with our IoT
            solutions. Gain real-time insights and take control today!
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="https://edenwayfoundation.com/"
            target="_blank"
            className="bg-bgButton font-bold text-[15px] text-bgBody px-6 py-2 rounded-full font-poppins hover:bg-opacity-80 transition-opacity duration-300 flex items-center gap-1"
          >
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
