import { PiPlantBold } from "react-icons/pi";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full relative bg-bgBody px-10 lg:px-20 py-20 flex flex-col gap-14">
      {/* Caption */}
      <div className="w-[80%] flex flex-col gap-3">
        <h1 className="text-5xl lg:text-6xl text-white font-semibold leading-tight font-poppins">
          Futuristic Farming Technology For The Future
        </h1>
        <div className="w-full md:w-[80%]">
          <p className="text-xl text-white font-poppins font-normal">
            GAIA: Nurturing Dreams and Empowering Skills, We believe in the
            transformative impact of learning and technology
          </p>
        </div>
      </div>
      {/* call to action BTN */}
      <div>
        <Link href='https://edenwayfoundation.com/' target='_blank' className="bg-bgButton font-bold text-[15px] text-bgBody py-2 px-4 rounded-full font-poppins hover:bg-opacity-80 transition-opacity duration-100">
          Learn More
        </Link>
      </div>
      <span className="hidden lg:block absolute  bottom-0 right-20 text-white text-[350px] h-[300px] overflow-hidden">
        <PiPlantBold />
      </span>
    </div>
  );
};

export default Hero;
