"use client";
import { useState, useEffect } from "react";
import Weather from "./Weather";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useMqtt } from "./../../mqtt-client";

const CustomBarChart = () => {
  // State to hold the chart data
  const [chartData, setChartData] = useState([
    { name: "0", humidity: 0, moisture: 0 },
    { name: "1", humidity: 0, moisture: 0 },
    { name: "2", humidity: 0, moisture: 0 },
    { name: "3", humidity: 0, moisture: 0 },
    { name: "4", humidity: 0, moisture: 0 },
    { name: "5", humidity: 0, moisture: 0 },
    { name: "6", humidity: 0, moisture: 0 },
    { name: "7", humidity: 0, moisture: 0 },
    { name: "8", humidity: 0, moisture: 0 },
    { name: "9", humidity: 0, moisture: 0 },
  ]);

  // Connect to MQTT broker
  const { messages } = useMqtt("wss://broker.emqx.io:8084/mqtt", "farm/sensor");

  // This effect will run whenever the messages array changes
  useEffect(() => {
    if (messages.length > 0) {
      // Process the 10 most recent messages in reverse chronological order (newest last)
      const recentMessages = [...messages].slice(0, 10).reverse();
      
      // Map the messages to the format expected by the chart
      const newChartData = recentMessages.map((message, index) => {
        return {
          name: String(index),
          // Extract temperature for humidity field
          humidity: message.temperature?.celsius ?? 0,
          // Extract soil moisture
          moisture: message.soil_moisture?.value ?? 0,
          // Store timestamp for tooltips if needed
          timestamp: message.receivedAt
        };
      });
      
      // If we have fewer than 10 messages, fill the rest with zeros
      if (newChartData.length < 10) {
        const paddingNeeded = 10 - newChartData.length;
        for (let i = 0; i < paddingNeeded; i++) {
          newChartData.unshift({
            name: String(i),
            humidity: 0,
            moisture: 0
          });
        }
        
        // Reassign names to keep sequential ordering
        newChartData.forEach((item, index) => {
          item.name = String(index);
        });
      }
      
      setChartData(newChartData);
    
    
    }
  }, [messages]);

  
 

  // Custom tooltip to display timestamp if needed
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-200 shadow-md">
          <p className="font-semibold">{`Reading #${label}`}</p>
          <p className="text-green-900">{`Temperature: ${payload[0].value}°C`}</p>
          <p className="text-lime-500">{`Moisture: ${payload[1].value}%`}</p>
          {data.timestamp && (
            <p className="text-xs text-gray-500">
              {new Date(data.timestamp).toLocaleTimeString()}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full py-5 flex flex-col lg:flex-row gap-6 ">
      {/* Bar chart  */}
      <div className="w-full lg:w-[70%] relative bg-white p-4 rounded-lg shadow-sm">
        <div className="absolute top-1 right-5 flex gap-4 items-center">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-barColorOne rounded-full"></div>
            <span className="text-lg text-barToolColor font-normal font-inter">Temperature</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-barColorTwo rounded-full"></div>
            <span className="text-lg text-barToolColor font-normal font-inter">Soil Moisture</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <RechartsBarChart 
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
            <Legend />
            <Bar 
              dataKey="humidity" 
              fill="#002C06" 
              name="Temperature" 
              animationDuration={300}
            />
            <Bar 
              dataKey="moisture" 
              fill="#CDEE64" 
              name="Soil Moisture" 
              animationDuration={300}
            />
          </RechartsBarChart>
        </ResponsiveContainer>
      </div>

      {/* Weather component */}
      <div className="w-full lg:w-[30%]">
        <Weather />
      </div>
    </div>
  );
};

export default CustomBarChart;