"use client";
import { useState, useEffect } from "react";
import Head from "next/head";
import { useMqtt } from "../../mqtt-client";

export default function Home() {
  const { client, isConnected, messages } = useMqtt(
    "wss://broker.emqx.io:8084/mqtt",
    "farm/sensor"
  );
  const [currentData, setCurrentData] = useState(null);

  // Key Change 1: Modify useEffect to update currentData more robustly
  useEffect(() => {
    if (messages.length > 0) {
      // Always set the most recent message as current data
      setCurrentData(messages[messages.length - 1]);
    }
  }, [messages]);

  const getMoistureColor = (value) => {
    if (value < 30) return "border-red-600"; // dry
    if (value < 70) return "border-green-500"; // good
    return "border-blue-500"; // wet
  };

  const getMoistureTextColor = (value) => {
    if (value < 30) return "text-red-600"; // dry
    if (value < 70) return "text-green-500"; // good
    return "text-blue-500"; // wet
  };

  const getTemperatureColor = (value) => {
    if (value < 10) return "border-blue-500"; // cold
    if (value < 30) return "border-green-500"; // good
    return "border-red-600"; // hot
  };

  const getTemperatureTextColor = (value) => {
    if (value < 10) return "text-blue-500"; // cold
    if (value < 30) return "text-green-500"; // good
    return "text-red-600"; // hot
  };

  return (
    <div className="w-full mx-auto">
      {/* <Head>
        <title>Garden Monitoring System</title>
        <meta name="description" content="Monitor soil moisture and temperature" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="py-8">
        {/* <h1 className="text-4xl font-bold text-center mb-8">
          Garden Monitoring System
        </h1> */}

        {/* <div className="text-lg text-center mb-8">
          Connection Status: {isConnected ? 
            <span className="font-semibold text-green-600">Connected</span> : 
            <span className="font-semibold text-red-600">Disconnected</span>}
        </div> */}

        {/* Key Change 2: Add fallback rendering and optional chaining */}
    
        {/* Rest of the code remains the same */}
       <div className="w-full mx-auto ">
      <main className="py-8">
        <div className="w-full mx-auto overflow-x-auto">
          <table className="min-w-full bg-white border border-green-200">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Count</th>
                <th className="py-3 px-4 text-left">Timestamp</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-200">
              {messages.map((msg, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-green-50" : "bg-white"}
                >
                  <td className="py-3 px-4">{idx + 1}</td>
                  <td className="py-3 px-4">
                    {new Date(msg.receivedAt).toLocaleDateString()}
                  </td>
                  <td className="py-3 px-4">
                    Soil Moisture at {msg.soil_moisture.value}% | 
                    Temperature at {msg.temperature?.celsius?.toFixed(1) || 'N/A'}°C
                  </td>
                  <td className="py-3 px-4">Auto Irrigate Station</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
      </main>
    </div>
  );
}
