"use client"

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMqtt } from "./../../mqtt-client"

// Component for individual gauge card
const GaugeCard = ({ label, value, unit }) => {
    return (
      <div className="bg-white rounded-lg p-4 w-full flex flex-col items-center">
        <div className="w-full flex justify-start">
        <span className="text-guageColor text-xl font-semibold font-poppins">{label}</span> {/* Displaying label text */}
        </div>
      
        <div className="relative w-full flex items-center justify-center">
          <svg className="w-full h-24" viewBox="0 0 100 50"> {/* SVG element for gauge */}
            <path
              d="M10,50 A40,40 0 1,1 90,50" // Background arc path
              fill="none"
              stroke="#e5e7eb" // Light gray background stroke
              strokeWidth="12"
            />
            <motion.path
              d="M10,50 A40,40 0 1,1 90,50" // Animated gauge path
              fill="none"
              stroke="#22c55e" // Green stroke color
              strokeWidth="12"
              strokeDasharray="157" // Total length of the stroke
              strokeDashoffset={157 - (value / 100) * 157} // Controls the fill based on value
              initial={{ strokeDashoffset: 157 }} // Initial state for animation
              animate={{ strokeDashoffset: 157 - (value / 100) * 157 }} // Animation state
              transition={{ duration: 1 }} // Animation duration
            />
          </svg>
          <span className="absolute top-10 text-[35px] font-poppins font-semibold">{value}</span> {/* Displaying value inside gauge */}
        </div>
        <span className="text-menuColor font-normal font-poppins text-xl">{unit}</span> {/* Displaying unit text */}
      </div>
    );
  };

const Guage = () => {

 const { isConnected, messages } = useMqtt("wss://broker.emqx.io:8084/mqtt", "farm/sensor"); // Connect to MQTT broker

 // Define initial sensor values
 const [sensorData, setSensorData] = useState({
  soilMoisture: 0,
  temperature: 0,
});



  // Update sensor data when a new MQTT message arrives
  useEffect(() => {
    if (messages.length > 0) {
      const latestMessage = messages[0]; // Get the most recent message
    
    
  
      setSensorData({
        soilMoisture:latestMessage?.soil_moisture?.value  || sensorData.soilMoisture,
        temperature: Math.round(latestMessage?.temperature?.celsius || sensorData.temperature), // Use temperature.celsius
       
      });
    }
    console.log(sensorData)
   
  }, [messages]);


  return (
    <div className="w-full grid gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6">
       <GaugeCard label="%"  value={`${sensorData.soilMoisture}`}  unit="Soil Moisture" />
       <GaugeCard label="°C"  value={`${sensorData.temperature}`} unit="Temperature" />
       <GaugeCard label="%"  value={`${sensorData.soilMoisture}`}  unit="Soil Moisture" />
       <GaugeCard label="°C"  value={`${sensorData.temperature}`} unit="Temperature" />
    </div>
  )
}

export default Guage
