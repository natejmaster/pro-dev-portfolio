import React from 'react';
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <h1 className="text-yellow-300 text-center text-2xl font-semibold">
        Nate Master - Full Stack Web Developer
      </h1>
      <Navbar />
    </header>
  );
}

export default Header;