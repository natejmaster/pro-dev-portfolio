import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-center mt-4 space-x-4">
        <Link to="/" className="text-yellow-300 hover:text-blue-500">About Me</Link>
        <Link to="/myprojects" className="text-yellow-300 hover:text-blue-500">My Projects</Link>
        <Link to="/resume" className="text-yellow-300 hover:text-blue-500">Resume</Link>
      </div>
    </nav>
  );
};

export default Navbar;

