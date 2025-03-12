import Guage from "./Guage"
import BarChart from "./BarChart"
import Map from "./Map"

const Overview = () => {
  return (
    <div className='bg-[#F5F5F5] flex flex-col gap-3 px-10 pt-3'>
       <h1 className='text-[25px] font-semibold font-poppins'>Overview</h1>
     <Guage />
    <BarChart />
     <Map />
    </div>
  )
}

export default Overview
