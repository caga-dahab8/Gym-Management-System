// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Gym Management System</h1>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link to="/register" className="hover:text-gray-400">Register</Link></li>
          <li><Link to="/view-students" className="hover:text-gray-400">View Students</Link></li>
          <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/contact-us" className="hover:text-gray-400">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
