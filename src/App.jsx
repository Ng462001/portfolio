import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Project from './components/Project';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';
import ProjectDetails from './Pages/ProjectDetails';

const PortfolioLayout = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <main className="content">
        <Home />
        <About />
        <Resume />
        <Project />
        <Contact />
      </main>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLayout />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
