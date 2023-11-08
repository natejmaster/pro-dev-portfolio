import React from 'react';

import booksgalore from '../assets/images/booksgalore.png';
import fridgeraider from '../assets/images/fridgeraider.png';
import jate from '../assets/images/jate.png';
import logogen from '../assets/images/logogen.png';
import weatherapp from '../assets/images/weatherapp.png';

export default function MyProjects() {
  return (
    <div className="flex justify-center items-center">
      <carousel>
        <img src={booksgalore} alt="Booksgalore" />
        <h3 className="flex justify-center">Books Galore: A sample inventory application for independent bookstores to keep track of inventory, users, and user requests</h3>
        <img src={fridgeraider} alt="Fridgeraider" />
        <img src={jate} alt="Jate" />
        <img src={logogen} alt="Logogen" />
        <img src={weatherapp} alt="Weatherapp" />
      </carousel>
    </div>
  );
}