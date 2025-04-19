import React from 'react';
import { User, Clock, Coffee, Book, Music, Star } from 'lucide-react';

const RoommateCard = ({ name, age, course, year, interests, compatibility, image }) => {
  return (
    <div className="bg-white max-h-[12rem] overflow-hidden shadow-md rounded-lg flex flex-col sm:flex-row">
      <div className="sm:w-1/3 bg-gray-200">
        <img src={image || "/api/placeholder/200/200"} alt={name} className="h-full w-full object-contain " />
      </div>
      <div className="sm:w-2/3 p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{name}, {age}</h3>
            <p className="text-sm text-gray-500">{course}, {year} Year</p>
          </div>
          <div className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full flex items-center">
            <Star size={14} className="mr-1" />
            {compatibility}% Match
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-900">Interests</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <span key={index} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                {interest}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <button className="px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700">
            View Profile
          </button>
          <button className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700">
            Start Chat
          </button>
        </div>
      </div>
    </div>
  );
};

const RoommateFinderSection = () => {
  const roommates = [
    {
      id: 1,
      name: 'Rahul Sharma',
      age: 21,
      course: 'Computer Science',
      year: '3rd',
      interests: ['Coding', 'Gaming', 'Movies'],
      compatibility: 92,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 2,
      name: 'Priya Patel',
      age: 20,
      course: 'Business Administration',
      year: '2nd',
      interests: ['Reading', 'Travel', 'Music'],
      compatibility: 85,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 3,
      name: 'Arjun Singh',
      age: 22,
      course: 'Mechanical Engineering',
      year: '4th',
      interests: ['Sports', 'Gym', 'Photography'],
      compatibility: 78,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Find Your Roommate</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Connect with compatible roommates based on lifestyle, interests, and preferences
          </p>
        </div>
        
        <div className="mt-12 space-y-6">
          {roommates.map((roommate) => (
            <RoommateCard key={roommate.id} {...roommate} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-indigo-600 border border-transparent rounded-md text-base font-medium text-white hover:bg-indigo-700">
            Create Your Roommate Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoommateFinderSection;