// app/map-page/page.js (App Router)
import dynamic from 'next/dynamic';

// Use dynamic import with SSR disabled
const MapWithNoSSR = dynamic(() => import('./Map'), {
  ssr: false,
});

import Wheel from "./Wheel"
import ControlTest from "./ControlTest.jsx"
import Table from "./Table"

const Alert = () => {
  return (
    <div className="bg-[#F5F5F5] flex flex-col gap-2 px-10 pt-3">
    <h1 className=" font-poppins text-[25px] font-semibold">Alerts</h1>
    <div className="flex flex-col gap-20">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10">
        {/* Map */}
       <div className="w-full md:w-1/2">
         
         <MapWithNoSSR />
        </div>
        {/* wheel  */}
        <div className="w-full md:w-1/2">
          <Wheel />
        </div>
      </div>

      {/* table */}
      <div>
        {/* <Table /> */}
        <ControlTest />
      </div>
    </div>
  </div>
  )
}

export default Alert
