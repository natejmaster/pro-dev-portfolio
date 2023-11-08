import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-yellow-300 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-x-4">
        <a href="/linkedin" className="text-yellow-300 hover:text-blue-500">LinkedIn</a>
        <a href="/github" className="text-yellow-300 hover:text-blue-500">GitHub</a>
        <a href="mailto:youremail@example.com" className="text-yellow-300 hover:text-blue-500">Email</a>
        <span>Phone: (123) 456-7890</span>
      </div>
    </footer>
  );
};

export default Footer;
