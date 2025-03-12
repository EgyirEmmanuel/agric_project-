"use client"

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { useMqtt } from "./../../mqtt-client";

// Component for individual gauge card
const GaugeCard = ({ label, value, unit }) => {
  return (
    <div className="bg-white rounded-lg p-4 w-full flex flex-col items-center">
      <div className="w-full flex justify-start">
        <span className="text-gray-600 text-sm font-semibold">{label}</span>
      </div>
    
      <div className="relative w-full flex items-center justify-center">
        <svg className="w-full h-24" viewBox="0 0 100 50">
          <path
            d="M10,50 A40,40 0 1,1 90,50"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
          />
          <motion.path
            d="M10,50 A40,40 0 1,1 90,50"
            fill="none"
            stroke={value < 30 ? "#ef4444" : value < 70 ? "#22c55e" : "#3b82f6"} // Color based on moisture level
            strokeWidth="12"
            strokeDasharray="157"
            strokeDashoffset={157 - (value / 100) * 157}
            initial={{ strokeDashoffset: 157 }}
            animate={{ strokeDashoffset: 157 - (value / 100) * 157 }}
            transition={{ duration: 1 }}
          />
        </svg>
        <span className="absolute top-10 text-2xl font-semibold">{value?.toFixed(1) || 0}</span>
      </div>
      <span className="text-gray-500 text-xl">{unit}</span>
    </div>
  );
};

export default function Home() {
  const { client, isConnected, messages } = useMqtt('wss://broker.emqx.io:8084/mqtt', 'soil/moisture');
  const [currentMoisture, setCurrentMoisture] = useState(null);
  
  useEffect(() => {
    if (messages.length > 0) {
      setCurrentMoisture(messages[0]);
    }
  }, [messages]);
  
  // This function is used to get the color of the moisture
  const getMoistureColor = (value) => {
    if (value < 30) return 'bg-red-600'; // dry - red
    if (value < 70) return 'bg-green-500'; // good - green
    return 'bg-blue-500'; // wet - blue
  };
  
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <main className=" py-5 flex flex-col items-center justify-start">
        {/* <h1 className="text-4xl font-bold text-center mb-8">
          Soil Moisture Monitor
        </h1>
        
        <div className="w-full py-3 px-4 mb-6 bg-gray-100 rounded-md text-center">
          Connection Status: {isConnected ?
            <span className="text-green-600 font-medium">Connected</span> :
            <span className="text-red-600 font-medium">Disconnected</span>}
        </div> */}
        
        {/* Gauge Section */}
        <div className="w-full max-w-4xl">
          <div className="w-full grid gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-4 lg:gap-6">
            <GaugeCard 
              label="SM" 
              value={currentMoisture?.value || 0} 
              unit="Soil Moisture" 
            />
            <GaugeCard 
              label="SM" 
              value={currentMoisture?.value || 0} 
              unit="Soil Moisture" 
            />
            <GaugeCard 
              label="SM" 
              value={currentMoisture?.value || 0} 
              unit="Soil Moisture" 
            />
            <GaugeCard 
              label="SM" 
              value={currentMoisture?.value || 0} 
              unit="Soil Moisture" 
            />
            {/* You can add other gauge cards here when you have the data */}
          </div>
        </div>
        
        {/* Traditional progress bar view (optional) */}
        {/* {currentMoisture && (
          <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Current Soil Moisture</h2>
            <div className="relative h-10 rounded-full overflow-hidden bg-gray-200 mb-5">
              <div
                className={`absolute top-0 left-0 h-full ${getMoistureColor(currentMoisture.value)}`}
                style={{ width: `${currentMoisture.value}%` }}
              ></div>
              <span className="absolute inset-0 flex items-center justify-center font-bold text-black text-shadow">
                {currentMoisture.value}%
              </span>
            </div>
            <div className="text-right text-sm text-gray-500">
              Device: {currentMoisture.device_id}
              <br />
              Last updated: {new Date(Date.now()).toLocaleTimeString()}
            </div>
          </div>
        )} */}
        
        {/* History Table */}
        {/* <div className="w-full max-w-4xl mt-6">
          <h2 className="text-xl font-semibold mb-4">Moisture History</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-2 text-left bg-gray-100 border-b">Time</th>
                  <th className="p-2 text-left bg-gray-100 border-b">Moisture (%)</th>
                  <th className="p-2 text-left bg-gray-100 border-b">Device</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="p-2 border-b border-gray-200">{new Date(Date.now() - (idx * 60000)).toLocaleTimeString()}</td>
                    <td className="p-2 border-b border-gray-200">{msg.value}%</td>
                    <td className="p-2 border-b border-gray-200">{msg.device_id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}
      </main>
    </div>
  );
}