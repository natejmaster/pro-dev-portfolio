import React, { useState } from 'react';
import booksgalore from '../assets/images/booksgalore.png';
import fridgeraider from '../assets/images/fridgeraider.png';
import jate from '../assets/images/jate.png';
import logogen from '../assets/images/logogen.png';
import weatherapp from '../assets/images/weatherapp.png';

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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{selectedProject.name}</h2>
            <p className="mt-2">{selectedProject.description}</p>
            <ul className="mt-4">
              {selectedProject.languages.map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <div className="mt-4">
              <a
                href={selectedProject.githubLink}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={selectedProject.deployedLink}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Deployed Link
              </a>
            </div>
            <button className="mt-4 btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Carousel Items */}
      <div id="slide1" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project1, target: e.target })}>
        <img src={booksgalore} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project2, target: e.target })}>
        <img src={fridgeraider} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project3, target: e.target })}>
        <img src={jate} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project4, target: e.target })}>
        <img src={logogen} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide5" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full" onClick={(e) => openModal({ data: project5, target: e.target })}>
        <img src={weatherapp} className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
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
  description: 'A book catalog app.',
  languages: ['React', 'Node.js', 'MongoDB'],
  githubLink: 'https://github.com/yourname/booksgalore',
  deployedLink: 'https://booksgalore.com',
};

const project2 = {
  name: 'Fridge Raider',
  description: 'An app for managing your fridge contents.',
  languages: ['React', 'Node.js', 'SQLite'],
  githubLink: 'https://github.com/yourname/fridgeraider',
  deployedLink: 'https://fridgeraider.com',
};

const project3 = {
  name: 'Jate',
  description: 'A restaurant booking app.',
  languages: ['React', 'Node.js', 'MySQL'],
  githubLink: 'https://github.com/yourname/jate',
  deployedLink: 'https://jate.com',
};

const project4 = {
  name: 'Logogen',
  description: 'A logo design tool.',
  languages: ['React', 'Python', 'Django'],
  githubLink: 'https://github.com/yourname/logogen',
  deployedLink: 'https://logogen.com',
};

const project5 = {
  name: 'Weather App',
  description: 'A weather forecasting app.',
  languages: ['React', 'Node.js', 'OpenWeather API'],
  githubLink: 'https://github.com/yourname/weatherapp',
  deployedLink: 'https://weatherapp.com',
};
