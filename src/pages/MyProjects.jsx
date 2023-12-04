import React, { useState } from 'react';
import booksgalore from '../assets/images/booksgalore.png';
import fridgeraider from '../assets/images/fridgeraider.png';
import jate from '../assets/images/jate.png';
import logogen from '../assets/images/logogen.png';
import weatherapp from '../assets/images/weatherapp.png';
import ubetr from '../assets/images/ubetr.png'

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to open the modal
  const openModal = (project) => {
    // Check if the click target is not an arrow button
    if (!project.target.classList.contains('btn-circle')) {
      setSelectedProject(project.data);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="carousel w-full">
      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-yellow-300">
            <h2 className="text-2xl font-semibold">{selectedProject.name}</h2>
            <p className="mt-2">{selectedProject.description}</p>
            <ul className="mt-4">
              {selectedProject.languages.map((language) => (
                <li key={language} className="text-yellow-300">
                  {language}
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href={selectedProject.githubLink}
                className="btn btn-primary bg-yellow-300 text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={selectedProject.deployedLink}
                className="btn btn-primary bg-yellow-300 text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Link
              </a>
            </div>
            <button
              className="mt-4 btn btn-secondary custom-button"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Carousel Items */}
      <div id="slide1" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project1, target: e.target })}>
        <img src={booksgalore} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide6" className="btn btn-circle text-yellow-300">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle text-yellow-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project2, target: e.target })}>
        <img src={fridgeraider} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle text-yellow-300">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle text-yellow-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project3, target: e.target })}>
        <img src={jate} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle text-yellow-300">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle text-yellow-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project4, target: e.target })}>
        <img src={logogen} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle text-yellow-300">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle text-yellow-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project5, target: e.target })}>
        <img src={weatherapp} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle text-yellow-300">
            ❮
          </a>
          <a href="#slide6" className="btn btn-circle text-yellow-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project6, target: e.target })}>
        <img src={ubetr} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide5" className="btn btn-circle text-yellow-300">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle text-yellow-300">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

// Define the project data
const project1 = {
  name: 'Books Galore',
  description: 'This application was a demonstration of full-stack programming with a focus on back-end development. We created a database service for an independent bookstore, populated this inventory with seeded data, and added a user management software so users could create accounts and add books to their personal wishlist (since no actual books were bought or sold)',
  languages: ['MySQL', 'Express', 'Node', 'Handlebar', 'Object-Oriented-Programming', 'Authentication', 'JS', 'Bulma', 'HTML', 'CSS'],
  githubLink: 'https://github.com/bycait27/bookstore-inventory',
  deployedLink: 'https://quiet-sierra-53897-6dfbdf75b102.herokuapp.com/',
};

const project2 = {
  name: 'Fridge Raider',
  description: 'Fridge Raider is a recipe-fetching and video resource app for users to take ingredients already in their refrigerator and utilizes API calls to find recipes and corresponding recipe demo videos for anything that includes those ingredients',
  languages: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'DaisyUI', 'API calls', 'LocalStorage'],
  githubLink: 'https://github.com/natejmaster/recipe-finder',
  deployedLink: 'https://natejmaster.github.io/recipe-finder/',
};

const project3 = {
  name: 'Jate',
  description: 'A PWA text editor using starter code provided by EdX, JATE (Just A Text Editor) allows users to write notes that will survive the closing of the app or redirection to a different window',
  languages: ['React', 'Node.js', 'NoSQL', 'PWA Optimization', 'JSX'],
  githubLink: 'https://github.com/natejmaster/pwa-text-editor',
  deployedLink: 'https://bloodcurdling-tomb-08562-cf94015ab6c8.herokuapp.com/',
};

const project4 = {
  name: 'Logo Generator',
  description: 'An SVG logo design tool using Express to create custom images (no deployed app)',
  languages: ['Express', 'SVG', 'JavaScript', 'API fetching'],
  githubLink: 'https://github.com/yourname/logogen',
  deployedLink: 'https://github.com/yourname/logogen',
};

const project5 = {
  name: 'Weather App',
  description: 'A weather forecasting app that utilized an open-source weather API to provide current weather statistics as well as a 5 day forecast',
  languages: ['HTML', 'CSS', 'OpenWeather API', 'JavaScript'],
  githubLink: 'https://github.com/natejmaster/weather-dashboard',
  deployedLink: 'https://natejmaster.github.io/weather-dashboard/#',
};

const project6 = {
  name: 'uBetr',
  description: 'An MERN-stack NFL micro-sportsbook that provides up-to-date point spread and over/under total betting options for users using virtual currency.',
  languages: ['React', 'Express', 'Tailwind CSS', 'MongoDB', 'Node.js', 'GraphQL'],
  githubLink: 'https://github.com/natejmaster/sports-gambling-odds-comp',
  deployedLink: 'https://rocky-hollows-26852-54ebc26e9935.herokuapp.com/',
};
