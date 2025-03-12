import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useMqtt } from "./../../mqtt-client"



export default function Home() {

  const { client, isConnected, messages } = useMqtt('wss://broker.emqx.io:8084/mqtt', 'soil/moisture');
  const [currentMoisture, setCurrentMoisture] = useState(null);

  useEffect(() => {
    if (messages.length > 0) {
      setCurrentMoisture(messages[0]);
    }
  }, [messages]);


//   this function is used to get the color of the moisture
  const getMoistureColor = (value) => {
    if (value < 30) return 'bg-red-600'; // dry - red
    if (value < 70) return 'bg-green-500'; // good - green
    return 'bg-blue-500'; // wet - blue
  };

  return (
    <div className="container mx-auto px-4 max-w-6xl">
      {/* <Head>
        <title>Soil Moisture Monitor</title>
        <meta name="description" content="Soil moisture monitoring dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <main className="min-h-screen py-16 flex flex-col items-center justify-start">
        {/* <h1 className="text-4xl font-bold text-center mb-8">
          Soil Moisture Monitor
        </h1> */}

        {/* <div className="w-full py-3 px-4 mb-6 bg-gray-100 rounded-md text-center">
          Connection Status: {isConnected ? 
            <span className="text-green-600 font-medium">Connected</span> : 
            <span className="text-red-600 font-medium">Disconnected</span>}
        </div> */}

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

        <div className="w-full max-w-4xl mt-6">
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
        </div>
      </main>
    </div>
  );
}