import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
          Find Your Perfect College Accommodation
        </h1>
        <p className="mt-6 max-w-xl mx-auto text-xl text-indigo-100">
          Discover nearby hostels, PGs, flats, and connect with potential roommates around your college campus.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;