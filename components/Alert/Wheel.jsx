'use client';

import { useEffect, useState } from 'react';

const Wheel = () => {
  const [count, setCount] = useState(140);

  return (
    <div className="flex items-center justify-center h-[476] p-6 bg-white">
      <div className="relative w-80 h-80 p-6 rounded-md">
        <p className="absolute top-4 left-4 text-xl font-semibold font-poppins text-black">Active Alerts</p>
        <div className="flex items-center justify-center h-full">
          <div className="relative flex items-center justify-center w-64 h-64">
            <svg className="absolute w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#ddd"
                strokeWidth="8"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#22c55e"
                strokeWidth="8"
                strokeDasharray="251.2"
                strokeDashoffset="0"
              />
            </svg>
            <span className="text-5xl font-poppins font-bold text-alertColor">
              {count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
