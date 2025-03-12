'use client';

import { useState } from 'react';

const Control = () => {
  const [pumpOn, setPumpOn] = useState(false);
  return (
    <div className='bg-[#F5F5F5] w-full h-full flex flex-col gap-3 px-10 pt-3'>
    <h1 className='text-[25px] font-poppins font-normal'>Controls</h1>

    <div className="flex flex-col md:flex-row items-center justify-between gap-14 p-6 lg:p-12 bg-white w-full ">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 font-poppins text-xl font-normal">Pump Status</span>
          <span
            className={`px-3 py-1 font-poppins text-xl font-normal text-white rounded-full ${pumpOn ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {pumpOn ? 'ON' : 'OFF'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 font-poppins text-xl font-normal">Network</span>
          <span className="px-3 py-1 font-poppins text-xl font-normal text-white bg-green-500 rounded-full">
            Connected
          </span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-gray-600 font-poppins text-xl font-normal">OFF / ON PUMP</span>
        <button
          className={`relative w-14 h-7 flex items-center rounded-full p-1 transition-all ${pumpOn ? 'bg-green-500' : 'bg-red-500'}`}
          onClick={() => setPumpOn(!pumpOn)}
        >
          <div
            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-all ${pumpOn ? 'translate-x-7' : ''}`}
          />
        </button>
      </div>
    </div>
</div>
  )
}

export default Control




