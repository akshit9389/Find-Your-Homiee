import React from 'react';
import { MapPin, Star, Users } from 'lucide-react';

const PropertyCard = ({ type, name, location, price, rating, image, distance }) => {
  return (
    <div className="bg-white overflow-hidden shadow-md rounded-lg">
      <div className="relative h-48 w-full bg-gray-200">
        <img src={image || "/api/placeholder/400/320"} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 bg-indigo-600 text-white px-2 py-1 rounded-md text-xs font-semibold">
          {type}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-medium text-gray-900">{name.slice(0,16)}...</h3>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <MapPin size={16} className="mr-1" />
          {location}
        </div>
        <div className="mt-1 flex items-center text-sm text-gray-500">
          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
            {distance} from college
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-lg font-semibold text-gray-900">₹{price}<span className="text-sm font-normal text-gray-500">/month</span></div>
          <button className="px-3 cursor-pointer py-1 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      type: 'Hostel',
      name: 'Student Haven Hostel',
      location: 'North Campus',
      price: '8,000',
      rating: '4.5',
      distance: '0.5 km',
      image: 'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 2,
      type: 'PG',
      name: 'Scholar\'s Den PG',
      location: 'East Campus',
      price: '12,000',
      rating: '4.2',
      distance: '1.2 km',
      image: 'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 3,
      type: 'Flat',
      name: 'Campus View Apartments',
      location: 'West Campus',
      price: '18,000',
      rating: '4.7',
      distance: '0.8 km',
      image: 'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: 4,
      type: 'Hostel',
      name: 'Collegiate House',
      location: 'South Campus',
      price: '7,500',
      rating: '4.0',
      distance: '1.5 km',
      image: 'https://plus.unsplash.com/premium_photo-1676321688612-4451a8721435?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydGllc3xlbnwwfHwwfHx8MA%3D%3D'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Popular Accommodations</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Discover top-rated places to stay near your college
          </p>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 cursor-pointer py-3 bg-white border border-gray-300 rounded-md text-base font-medium text-indigo-600 hover:bg-gray-50">
            View All Accommodations
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertiesSection;