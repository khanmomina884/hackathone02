import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      {/* Navigation links */}
      <div className="flex space-x-8 justify-center text-white">
        <a href="#home" className="hover:text-yellow-400">Home</a>
        <a href="#about" className="hover:text-yellow-400">About</a>
        <a href="#shop" className="hover:text-yellow-400">Shop</a>
        <a href="#contact" className="hover:text-yellow-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;