// src/components/ProjectList.js
import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <section className="container my-5">
      <h2 className="text-black mb-4">Explore 102,245 projects</h2>
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="col-lg-4 col-md-6 mb-4">
            <ProjectCard />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;