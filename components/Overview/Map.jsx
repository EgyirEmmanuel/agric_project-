import { MdGpsFixed } from "react-icons/md";
import mapView from "./../../public/mapView.jpg";

import Image from 'next/image';

const Map = () => {
  return (
    <div className='w-full h-64 relative'>
    <Image src={mapView} alt="map" 	fill={true} />
    <span className='absolute top-3 right-3 text-green-700 text-6xl'>
      <MdGpsFixed />
    </span>
   </div>
  )
}

export default Map
