"use client"; // Ensures it runs on the client

import { useState, useEffect } from "react";
import { FaWind } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import Image from "next/image";
import clouds from "./../../public/clouds.png";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const response = await fetch(`${URL}Akwakrom&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`);
        
        if (!response.ok) throw new Error("Failed to fetch weather data");

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="w-full h-full bg-barColorTwo rounded-2xl p-5 flex flex-col items-center text-white">
      {/* Weather Icon */}
      <div>
        <Image src={clouds} alt="Logo" width={170} height={170} />
      </div>

      {/* Handle loading & error */}
      {loading ? (
        <p className="font-poppins">Loading weather...</p>
      ) : error ? (
        <p className="text-red-500 font-poppins">{error}</p>
      ) : (
        <>
          <h1 className="text-6xl font-normal font-poppins">{Math.round(weather?.main?.temp)}°c</h1>
          <p className="text-3xl font-roboto font-normal">{weather?.name}</p>

          {/* Time & Wind Speed */}
          <div className="flex justify-between w-full mt-4 text-sm font-semibold">
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                <FaClock />
              </span>
              <div className="flex flex-col">
                <span className="font-poppins font-semibold text-base">{new Date(weather.dt * 1000).toLocaleTimeString()}</span>
                <span className="font-poppins font-semibold text-base">Time</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">
                <FaWind />
              </span>
              <div className="flex flex-col">
                <span className="font-poppins font-semibold text-base">{weather?.wind?.speed} km/h</span>
                <span className="font-poppins font-semibold text-base">Wind Speed</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
