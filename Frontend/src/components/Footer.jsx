import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">FindYourHomie</h3>
            <p className="text-gray-400">
              The ultimate platform for college students to find accommodations and roommates.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Accommodations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Hostels</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">PGs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Flats</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">List Your Property</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Roommates</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Find Roommate</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Create Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Roommate Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Safety Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-center">© 2025 FindYourHomie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;