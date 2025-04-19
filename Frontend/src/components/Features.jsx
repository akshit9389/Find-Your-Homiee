import React from 'react';
import { MapPin, Users, MessageSquare, Shield } from 'lucide-react';

const Feature = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-center w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-center text-gray-500">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <MapPin size={24} />,
      title: 'Nearby Accommodations',
      description: 'Find hostels, PG, and flats located close to your college campus.'
    },
    {
      icon: <Users size={24} />,
      title: 'Roommate Matching',
      description: 'Get matched with compatible roommates based on your preferences and lifestyle.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Direct Messaging',
      description: 'Chat directly with property owners and potential roommates in real-time.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Verified Listings',
      description: 'All accommodations and user profiles are verified for your safety and security.'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose FindYourHomie</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            The complete platform for all your college accommodation needs
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;