import React from 'react';
import { Carousel } from 'flowbite-react';
import booksgalore from '../assets/images/booksgalore.png';
import fridgeraider from '../assets/images/fridgeraider.png';
import jate from '../assets/images/jate.png';
import logogen from '../assets/images/logogen.png';
import weatherapp from '../assets/images/weatherapp.png';

export default function MyProjects() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
        <img src={booksgalore} alt="Booksgalore" />
        <img src={fridgeraider} alt="Fridgeraider" />
        <img src={jate} alt="Jate" />
        <img src={logogen} alt="Logogen" />
        <img src={weatherapp} alt="Weatherapp" />
      </Carousel>
    </div>
  );
}
