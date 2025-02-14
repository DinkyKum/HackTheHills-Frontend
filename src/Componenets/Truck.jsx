import React from 'react'
import { useState } from "react";


const Truck = () => {
  const [stops, setStops] = useState(["Stop-1"]); // Initially, only one stop is visible

  const addStop = () => {
    if (stops.length < 10) {
      setStops([...stops, `Stop-${stops.length + 1}`]); // Adds the next stop dynamically
    }
  };

  const [licensePlate, setLicensePlate] = useState("1234");
  const [totalCapacity, setTotalCapacity] = useState("1000");

  return (
    <div className="flex justify-center items-center min-h-screen p-10">
      <div className="p-8 rounded-lg shadow-lg w-[500px]">
        <h1 className="text-center text-white text-2xl font-bold mb-6">Add Truck</h1>

        {/* License Plate Input */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text text-white">License Plate</span>
          </div>
          <input type="text" placeholder="Type here" value={licensePlate} onChange={(e)=> setLicensePlate(e.target.value)} className="input input-bordered w-full" />
        </label>

        {/* Total Capacity Input */}
        <label className="form-control w-full mt-4">
          <div className="label">
            <span className="label-text text-white">Total Capacity</span>
          </div>
          <input type="text" placeholder="Type here" value={totalCapacity} onChange={(e)=> setTotalCapacity(e.target.value)} className="input input-bordered w-full" />
        </label>

        {/* Stops Section */}
        <span className="label-text text-white mt-6 block">Current Capacity - At Each Stop</span>
        <ul className="timeline timeline-vertical mt-4">
          {stops.map((stop, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="timeline-start text-white w-20">{stop}</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-green-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end timeline-box w-full flex items-center gap-2">
                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                
                {/* Circular + Button to Add More Stops */}
                {index === stops.length - 1 && stops.length < 10 && (
                  <button
                    onClick={addStop}
                    className="h-6 w-6 aspect-square flex items-center justify-center rounded-full bg-gray-700 text-gray-300 text-xl font-bold hover:bg-gray-600 transition p-0"
                  >
                    <span className="leading-none py-2">+</span>
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>

        {/* Submit Button */}
        <button className="btn btn-success w-full mt-6">Add</button>
      </div>
    </div>
  );
};

export default Truck;





