import { useState, useEffect } from 'react';
//Replace these with my actual components
import SearchBar from './components/SearchBar';
import IssueList from './components/IssueList';
import './App.css'

function App() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Project />
      <Footer />
    </>
  );
}

export default App;