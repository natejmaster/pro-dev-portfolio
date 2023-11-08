import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-yellow-300 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center space-x-4">
        <a href="https://www.linkedin.com/in/nate-master-6041b9118/" className="text-yellow-300 hover:text-blue-500">LinkedIn</a>
        <a href="https://github.com/natejmaster" className="text-yellow-300 hover:text-blue-500">GitHub</a>
        <a href="mailto:natejmaster@gmail.com" className="text-yellow-300 hover:text-blue-500">Email: natejmaster@gmail.com</a>
        <span>Phone: (314) 882-6791 </span>
      </div>
    </footer>
  );
};

export default Footer;
