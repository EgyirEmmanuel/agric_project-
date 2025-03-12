import React from 'react'

const Table = () => {
    const data = [
        {
          count: 1,
          timestamp: '07-02-2025',
          description: 'Soil Moisture back to normal at 7%',
          source: 'Auto Irrigate Station',
        },
        {
          count: 2,
          timestamp: '07-02-2025',
          description: 'Water Temperature normal at 25%',
          source: 'Auto Irrigate Station',
        },
        {
          count: 3,
                  
        },
        {
          count: 4,
                   
        },
        {
          count: 5,
                 
        },
             
    ];

  // Change made here: Limit data to first 4 entries only
  const limitedData = data.slice(0, 4);

  return (
    <div className="overflow-x-auto w-full max-w-full bg-white">
    <table className="min-w-full border-collapse">
      <thead>
        <tr className="bg-green-500 text-white">
          <th className="p-2 text-xl font-poppins font-normal md:text-lg text-left">Count</th>
          <th className="p-2 text-xl font-poppins font-normal md:text-lg text-left">Timestamp</th>
          <th className="p-2 text-xl font-poppins font-normal md:text-lg text-left">Description</th>
          <th className="p-2 text-xl font-poppins font-normal md:text-lg text-left">Source</th>
        </tr>
      </thead>
      <tbody>
        {/* Change made here: Using limitedData instead of data */}
        {limitedData.map((item, index) => (
          <tr key={index} className="border-t">
            <td className="p-2 text-xl font-poppins font-normal md:text-lg text-blue-600 cursor-pointer">{item.count}</td>
            <td className="p-2 text-xl font-poppins font-normal md:text-lg text-blue-600 cursor-pointer">{item.timestamp}</td>
            <td className="p-2 text-xl font-poppins font-normal md:text-lg">{item.description}</td>
            <td className="p-2 text-xl font-poppins font-normal md:text-lg text-blue-600 cursor-pointer">{item.source}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default Table