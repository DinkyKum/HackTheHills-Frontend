import React, { useState, useEffect } from "react";
import { Truck, Navigation, Package, PackageCheck } from "lucide-react";
import axios from "axios";

const MergedSchedule = () => {
  const [mergedSchedule, setMergedSchedule] = useState([]);

  const fetchMergedSchedule = async () => {
    try {
      const res = await axios.get("http://localhost:3000/mergedSchedule", {
        withCredentials: true,
      });
      console.log("API Response:", res.data); // Debugging

      setMergedSchedule(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching merged schedule:", error);
      setMergedSchedule([]); 
    }
  };

  useEffect(() => {
    fetchMergedSchedule();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Truck className="w-8 h-8 text-emerald-400" />
          <h1 className="text-3xl font-bold text-white">
            Transportation Dashboard
          </h1>
        </div>

        <div className="space-y-6">
          {Array.isArray(mergedSchedule) || mergedSchedule.length > 0 ? (
            mergedSchedule.map((truck) => (
              <div
                key={truck.transportationTruckId}
                className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-emerald-500/50"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-white">
                    {truck.transportationTruckLicensePlate}
                  </h2>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                    Active
                  </span>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Navigation className="w-5 h-5 text-emerald-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Route</p>
                      <p className="font-medium text-white">
                        {truck.finalSource} → {truck.finalDestination}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Package className="w-5 h-5 text-emerald-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Current Load</p>
                      <p className="font-medium text-white">
                        {truck.finalCurrentLoad.join(", ")}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <PackageCheck className="w-5 h-5 text-emerald-400 mt-1" />
                    <div>
                      <p className="text-sm text-gray-400">Remaining Load</p>
                      <p className="font-medium text-white">
                        {truck.finalRemainingLoad.join(", ")}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm text-gray-400 mb-3">Stops</p>
                    <div className="flex flex-wrap gap-2">
                      {truck.stops.map((stop) => (
                        <span
                          key={stop}
                          className="px-3 py-1 bg-gray-700/50 text-emerald-300 rounded-full text-sm border border-gray-600"
                        >
                          {stop}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-center">No schedules available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MergedSchedule;
