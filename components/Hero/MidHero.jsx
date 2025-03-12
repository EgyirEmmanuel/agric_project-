import Image from "next/image";

import Link from "next/link"

import farmImage from "./../../public/farmImage.png"

import { MdPrecisionManufacturing, MdHandshake } from "react-icons/md";
import { SlTarget } from "react-icons/sl";
import { IoIosArrowRoundForward } from "react-icons/io";

const MidHero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row ">
       {/* Image */}
       <div className="w-full  h-[400px] lg:h-auto lg:w-1/2 relative">
        <Image src={farmImage} alt="Hero-Image" fill  className="object-cover" />
      </div>

       {/* Preview */}
       <div className="bg-bgButton w-full  lg:w-1/2 flex flex-col gap-16 py-10">

       <div className="w-full text-center ">
          <p className="font-semibold text-[22px] font-poppins">
            Importance of Technology Based Farming
          </p>
        </div>

        <div className="flex flex-col gap-12 px-14 md:px-28">
          {/* list 1 */}
          <div className="flex gap-4">
            <span className="text-2xl text-bgBody">
              <MdPrecisionManufacturing />
            </span>
            <div>
              <p className="font-semibold text-lg font-poppins">Autonomous Farming</p>
              <p className="font-semibold text-base text-textColors font-poppins">
                Automatic Farming with a small amount of <br /> human labour
              </p>
            </div>
          </div>

          {/* list 2 */}
          <div className="flex gap-4">
            <span className="text-2xl text-bgBody">
              <SlTarget />
            </span>
            <div>
              <p className="font-semibold text-lg font-poppins">Precision Farming</p>
              <p className="font-semibold text-base text-textColors font-poppins">
                Precision Based Farming with limited room to error
              </p>
            </div>
          </div>

          {/* list 3 */}
          <div className="flex gap-4">
            <span className="text-2xl text-bgBody">
              <MdHandshake />
            </span>
            <div>
              <p className="font-semibold text-lg font-poppins">Efficienct Farming</p>
              <p className="font-semibold text-base text-textColors font-poppins">
                Generate greater farming yield products.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="font-semibold text-base text-textColors font-sans">
              Get to know more about what we are doing
            </p>
            <Link href="https://edenwayfoundation.com/" target="_blank" className="bg-bgBody text-white text-[35px]  rounded-full hover:bg-opacity-80 transition-opacity duration-100">
            <IoIosArrowRoundForward  />
            </Link>
          </div>
        </div>




       </div>
    </div>
  )
}

export default MidHero
