import React from 'react'
import { Calendar, CalendarClock } from 'lucide-react';

const AdminSection = () => {
    return (
        <div className="min-h-screen bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 gap-6">
              <button
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 p-0.5 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/25 focus:outline-none"
                onClick={() => console.log('Mergeable Schedule clicked')}
              >
                <div className="relative rounded-xl bg-gray-900/50 px-8 py-6 transition-all duration-300 group-hover:bg-gray-900/40">
                  <div className="flex items-center justify-center space-x-4">
                    <Calendar className="h-8 w-8 text-indigo-300" />
                    <span className="text-xl font-semibold text-white">
                      Mergeable Schedule
                    </span>
                  </div>
                  <div className="mt-2 text-center text-sm text-indigo-200 opacity-80">
                    Create new mergeable schedules
                  </div>
                </div>
              </button>
    
              <button
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 p-0.5 transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-lg hover:shadow-emerald-500/25 focus:outline-none"
                onClick={() => console.log('Merge Schedules clicked')}
              >
                <div className="relative rounded-xl bg-gray-900/50 px-8 py-6 transition-all duration-300 group-hover:bg-gray-900/40">
                  <div className="flex items-center justify-center space-x-4">
                    <CalendarClock className="h-8 w-8 text-emerald-300" />
                    <span className="text-xl font-semibold text-white">
                      Merge Schedules
                    </span>
                  </div>
                  <div className="mt-2 text-center text-sm text-emerald-200 opacity-80">
                    Combine multiple schedules
                  </div>
                </div>
              </button>
            </div>
    
            {/* Main Content Area */}
            <div className="mt-8 rounded-xl bg-gray-800/50 p-6">
              <p className="text-gray-400">Dashboard content goes here...</p>
            </div>
          </div>
        </div>
      );
}

export default AdminSection
