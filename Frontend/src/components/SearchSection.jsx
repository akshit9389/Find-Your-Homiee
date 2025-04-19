import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchSection = () => {
  const [activeTab, setActiveTab] = useState('accommodation');

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex">
            <button
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'accommodation'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('accommodation')}
            >
              Find Accommodation
            </button>
            <button
              className={`w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                activeTab === 'roommate'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('roommate')}
            >
              Find Roommate
            </button>
          </nav>
        </div>
        <div className="p-4 sm:p-6">
          {activeTab === 'accommodation' ? (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your college or area"
                />
              </div>
              <div className="sm:w-1/3 rounded-md">
                <select className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md leading-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Any Type</option>
                  <option>Hostel</option>
                  <option>PG</option>
                  <option>Flat</option>
                </select>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                <Search size={16} className="mr-2" />
                Search
              </button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin size={20} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your college or area"
                />
              </div>
              <div className="sm:w-1/3 rounded-md">
                <select className="block w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md leading-5 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Looking for</option>
                  <option>Finding roommate</option>
                  <option>Being a roommate</option>
                </select>
              </div>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
              >
                <Search size={16} className="mr-2" />
                Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchSection;