// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import HowToInvest from './components/HowToInvest';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProjectList />} />
        <Route path="/HowToInvest" element={<HowToInvest />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;