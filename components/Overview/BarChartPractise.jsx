"use client";

import { useState, useEffect } from 'react';
import Weather from "./Weather";
import { useMqtt } from "./../../mqtt-client";
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const CustomBarChart = () => {
  const { client, isConnected, messages } = useMqtt('wss://broker.emqx.io:8084/mqtt', 'soil/moisture');
  const [chartData, setChartData] = useState([]);
  const [latestTimestamp, setLatestTimestamp] = useState(0);

  // Update chart data when new messages arrive
  useEffect(() => {
    if (messages.length > 0) {
      const latestMessage = messages[0];
      
      // Create a new data point for the chart
      const newDataPoint = {
        name: new Date().getHours() + ":" + new Date().getMinutes(),
        humidity: latestMessage.humidity || 0, // Assuming humidity might be part of your MQTT message
        moisture: latestMessage.value || 0     // Using the moisture value from your MQTT message
      };
      
      // Create a new array with the latest data point at the beginning
      setChartData(prevData => {
        // Create new array with new data point
        const newData = [newDataPoint, ...prevData];
        
        // Keep only the last 10 entries for better visibility
        if (newData.length > 10) {
          return newData.slice(0, 10);
        }
        return newData;
      });
      
      // Update timestamp to prevent duplicate processing
      setLatestTimestamp(Date.now());
    }
  }, [messages]);

  return (
    <div className="w-full py-5 flex flex-col lg:flex-row gap-6">
      {/* Bar chart */}
      <div className="w-full lg:w-[75%] relative bg-white p-4 rounded-lg shadow-sm">
        <div className="absolute top-1 right-5 flex gap-4 items-center">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-green-900"></div>
            <span className="text-sm font-bold text-green-900 rounded-full">Humidity</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-lime-500"></div>
            <span className="text-sm font-bold text-lime-500 rounded-full">Soil Moisture</span>
          </div>
        </div>

        {chartData.length === 0 ? (
          <div className="flex justify-center items-center h-[300px] text-gray-400">
            Waiting for data...
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <RechartsBarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip cursor={{ fill: 'transparent' }} />
              <Legend />
              <Bar dataKey="humidity" fill="#002400" />
              <Bar dataKey="moisture" fill="#c6ea62" />
            </RechartsBarChart>
          </ResponsiveContainer>
        )}

        <div className="text-right text-sm text-gray-500 mt-2">
          Last updated: {new Date(latestTimestamp).toLocaleTimeString()}
          {isConnected ? 
            <span className="ml-2 text-green-600 font-medium">• Connected</span> : 
            <span className="ml-2 text-red-600 font-medium">• Disconnected</span>
          }
        </div>
      </div>

      {/* Weather component */}
      <div className="w-full lg:w-[25%]">
        <Weather />
      </div>
    </div>
  );
};

export default CustomBarChart;